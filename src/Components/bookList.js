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
  groupBookDataList =(obj)=>{
    let groupBookDataList = this.state.bookDataList;

    groupBookDataList = groupBookDataList.reduce((acc, item) => {

      if (!acc[item.roomTypeLabel]) {
    
        acc[item.roomTypeLabel] = [];
    
      }
    
      acc[item.roomTypeLabel].push(item);
      console.log("acc" + acc)
      return acc;
    })

    this.setState({
       groupBookDataList
    })
  }

 
  render() {
    const {groupBookDataList} = this.state;
    
    return (
      <div>
          {
            groupBookDataList.map((obj)=>{
                return (
                    <ul>
                        <li>
                           {obj.price}
                        </li>
                    </ul>
                )
            })
          }
      </div>
    )
  }
}
