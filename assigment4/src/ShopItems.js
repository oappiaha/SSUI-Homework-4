import React, { Component } from 'react';
import './App.css';





class ShopItems extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "App-shopCard" onClick = {this.props.onClick}>
        
        <img width = "200px" height = "200px"className="App-shopImg" src={this.props.image} alt={this.props.altText} />
        <div className = "App-shopContainer">
	        <h5 className = "App-shopCardName">{this.props.name}</h5>
	        <p className = "App-shopCardPrice">${this.props.price}.00</p>
      	</div>
        
      </div>
    );
  }
}


export default ShopItems;