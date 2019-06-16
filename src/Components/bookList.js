import React, { Component } from 'react'
import bookDataList from '../mock/getHotelBookData';
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './bookList.css';


export default class bookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDataList : bookDataList,
      groupBookDataList: {}
    };
    this.onClickAction = this.onClickAction.bind(this);
  }

  onClickAction(room, bed, desc, price) {
   alert(room + ', '  + bed + ', ' + desc + ', ' + price);
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
   this.setState({groupBookDataList: group})
  }

  render() {
    const {groupBookDataList} = this.state;
    return (
       <Container>
          <Row className="block-example border bg-info text-center font-weight-bold pb-1 text-white text-capitalize">
               <Col xs={12} sm={4} className="pt-1 pb-1">
                  Room Type
                </Col>
                <Col xs={12} sm={4} className=" pt-1 pb-1">
                  Bed Type
                </Col>
                <Col xs={12} sm={4} className="pt-1 pb-1">
                  Price
                </Col>
          </Row>
          {  
            Object.keys(groupBookDataList).map(name => {
              return  Object.keys(groupBookDataList[name]).map((iter)=>{
                  return (
                    <Row className="block-example mb-3 border border-info text-center text-capitalize">
                       <Col xs={12} sm={4} className="border-right pt-3 pb- border-info">
                           {name}
                       </Col>
                       <Col xs={12} sm={4}  className="border-right pt-3 pb-1 border-info">
                          <ul className="list-column">
                            <li>
                              {groupBookDataList[name][iter].bedTypeLabel}
                            </li>
                            <li>
                            {groupBookDataList[name][iter].boardCodeDescription}
                            </li>
                          </ul>
                       </Col>
                       <Col xs={12} sm={4} className="pt-3 pb-1">
                           <span className="mr-3">{groupBookDataList[name][iter].totalPrice}</span>
                           <Button variant="info" size="sm" onClick={(e) =>this.onClickAction(name, groupBookDataList[name][iter].bedTypeLabel , groupBookDataList[name][iter].boardCodeDescription , groupBookDataList[name][iter].totalPrice)}>
                             Action
                            </Button>
                       </Col>
                    </Row>
                  )
              })
            })
            }
       </Container>
    )
  }
}
