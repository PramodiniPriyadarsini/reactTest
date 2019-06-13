import React, { Component } from 'react'
import productList from '../mock/productList';


export default class product extends Component {
  render() {
    return (
      <div>
          {
            productList.data.map((obj)=>{
                return (
                    <ul>
                        <li>
                           {obj.attributes.title} 
                        </li>
                    </ul>
                )
            })
          }
      </div>
    )
  }
}
