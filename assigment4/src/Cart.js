import React, { Component } from 'react';
import './App.css';
import CartItems from './CartItems.js';

class Cart extends Component{
  constructor(props) {
    super(props);
    
    
  }
  //too difficult for me :(

   removeItem(id){
    // var inside = JSON.parse(localStorage.getItem("cartItems"));
    // var n = this.reCopy()
    // inside.splice(inside.indexOf(id), 1);

    // this.renderCart();
    console.log("help")
  } 




  renderCart(){
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));

    var elements = [];
    var total = 0
    if (localStorage.getItem("cartItems") !== null){

      for(var i=0; i < cartItems.length; i++)
        {
          var item = cartItems[i]
          total += item.props.price;

          elements.push(<CartItems onClose = {(ev) => this.removeItem.bind(this, i)} image = {item.props.image} quantity = {item.props.quantity} name = {item.props.name} price = {item.props.price} />)
        }
    }
    return (

      <div className = "cartContainer">
        <div className = "cartTotals">
          <h2 className = "cartGrand"> Grand Total:</h2>
          <h2 className = "cartTotal">${total}.00 </h2>
        </div>


        <table id = "cartTable" >
        <thead>
         <tr>

            <th>
              Bun
              <br>
              </br> 
            </th>

            <th>
              Quantity
              <br>
              </br>
            </th>

            <th>
              Price
              <br>
              </br>
            </th>

            <th>
              Remove
              <br>
              </br>
            </th>
            
          </tr>

          </thead>

          {elements}


        </table>
        
      </div>

      )
  }

  render() {
    return (

      this.renderCart()

    )
  };
}


export default Cart;