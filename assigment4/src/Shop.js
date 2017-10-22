import React, { Component } from 'react';
import './App.css';
import Details from './Detail.js';
import ShopItems from './ShopItems.js'
import twoImg from './resources/images/12.png';
import threeImg from './resources/images/3.png';
import fourImg from './resources/images/5.png';
import fiveImg from './resources/images/6.png';
import sixImg from './resources/images/7.png';
import sevenImg from './resources/images/8.png';
import eightImg from './resources/images/10.png';
import nineImg from './resources/images/buns3.jpeg';
import tenImg from './resources/images/13.png';
import eleImg from './resources/images/14.png';
import tweImg from './resources/images/15.png';
import thrImg from './resources/images/17.png';




class Shop extends Component{
  constructor(props) {
    super(props);

    var two = {image: twoImg, altText: "Cinnamon Roll", name: "Original (Gluten-free)", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var three = {image: threeImg, altText: "Cinnamon Roll", name: "Bacon Roll", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var four = {image: fourImg, altText: "Cinnamon Roll", name: "Walnut", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var five = {image: fiveImg, altText: "Cinnamon Roll", name: "Red Velvet", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var six = {image: sixImg, altText: "Cinnamon Roll", name: "Maple Apple Pecan", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var seven = {image: sevenImg, altText: "Cinnamon Roll", name: "Pumpkin Spice", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var eight = {image: eightImg, altText: "Cinnamon Roll", name: "Caramel Pecan", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var nine = {image: nineImg, altText: "Cinnamon Roll", name: "Carrot Cake", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var ten = {image: tenImg, altText: "Cinnamon Roll", name: "Strawberry Rhubarb", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var eleven = {image: eleImg, altText: "Cinnamon Roll", name: "Birthday Cake", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var twelve = {image: tweImg, altText: "Cinnamon Roll", name: "Lemon Lavender", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}
    var thirt = {image: thrImg, altText: "Cinnamon Roll", name: "Blackberry Roll", price: 5.00, description: "A mouth-watering Cinnamon Roll baked with Swiss dough. Grab as many as you want!", quantity: 1}

 

    this.state = {
      inventory: [two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirt],
      detail: null,
    }

  }


  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var detailView = <Details onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} name = {item.name} price = {item.price} description = {item.description} quantity = {item.quantity} />
    this.setState({detail: detailView})
  }


  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }



  renderInventory() {
    var elements = []
    
    // var user = JSON.parse( localStorage.getItem("user") );

    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]

      elements.push(<ShopItems onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} name = {item.name} price = {item.price} />)
    }

    return (
      <div>
        {elements}
        {this.renderDetailView()}
      </div>
    )
  }


  render() {
    return (
      this.renderInventory()
    );
  }
}



export default Shop;