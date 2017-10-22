import React, { Component } from 'react';
import './App.css';
import MiniViewItems from './MiniViewItems.js';





class MiniView extends Component{
  constructor(props) {
    super(props);
  }

  render() {
      var elements = "";
      var total = "";
    
      if (localStorage.getItem("cartItems") !== null){
        elements = []
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        total = 0

        for(var i=0; i < cartItems.length; i++)
        {
          var item = cartItems[i]
          total += item.props.price;
          elements.push(<MiniViewItems image = {item.props.image} quantity = {item.props.quantity} name = {item.props.name} price = {item.props.price} />)
        }

    }

    return (
     <span class="tooltiptext">
      <h4>Total:
         ${total}.00
      </h4>
     


      {elements}
     </span>
    );
  }
}


export default MiniView;