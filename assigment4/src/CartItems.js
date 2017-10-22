import React, { Component } from 'react';
import './App.css';


class CartItems extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (

     
        <tbody>
        <tr className="cartRow">

            <td>
         
              <img width = "100px" height = "100px"className="App-shopImg" src={this.props.image} alt="bun" />
              <p className = "cartItemName">{this.props.name}</p>
              <br>
              </br> 
            </td>

            <td>
              <p className = "cartItemName">{this.props.quantity}</p>
              <br>
              </br>
            </td>

            <td>
              <p className = "cartItemName">${this.props.price}.00 </p>
              <br>
              </br>
            </td>

            <td>
              <div className="XoutCart" onClick={this.props.onClose}><p>X</p></div>
              <br>
              </br>
            </td>
          </tr>
          </tbody>
        
    );
  }
}


export default CartItems;