
/*eslint no-use-before-define: ["error", { "variables": false }]*/
import React, { Component } from 'react'
import bookDataList from '../mock/getHotelBookData';

export default class bookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDataList : bookDataList,
      groupBookDataList: bookDataList
    };
  }


  componentDidMount() {
    let {bookDataList} = this.state;
    if(bookDataList){
      return this.groupBookDataList1(bookDataList);
    }
  }

  groupBookDataList1 = (obj) =>{
    let group = obj.reduce((acc, item) => {
      if (!acc[item.roomTypeLabel]) {
        acc[item.roomTypeLabel] = [];
      }
    
      acc[item.roomTypeLabel].push(item);
      return acc;
    },{})
    //const groupArray = Object.entries(group).map((e) => ( { [e[0]]: e[1] } ));
   // console.log("list" + abc);
    this.setState({groupBookDataList: group})
  }

  render() {
    const {groupBookDataList} = this.state;

    return (
        <div>
            {
              Object.keys(groupBookDataList).map(name => {
                return (
                  <div>
                    <div>{name}</div>
                    {
                      groupBookDataList[name].map(data => {
                        return <div>{data.totalPrice}</div> 
                      })
                    }
                  </div>
                )
              })
            }
      </div>
    )
  }
}
