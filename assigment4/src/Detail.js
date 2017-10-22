import React, { Component } from 'react';
import App from './App.js';
import CartItems from './CartItems.js';
import Cart from './Cart.js';
import './App.css';


class Detail extends Component{
  constructor(props) {
    super(props);
    

    this.state = {
      cartView: null,
      price: 5,
      quantity: 1,
      added: "Add To Cart"
    };
    this.updatePrice = this.updatePrice.bind(this);
  }

  // updatePrice(){
  //   console.log();

  // }

  updatePrice(e){
    var q = e.target.value;
    var cost = 5 * q;
    this.setState({price: cost});
    this.setState({quantity: q});
    this.render();
  }

  changePage(){
    return <Cart/>

  }

  addToCart(){
    var add = this.loadCart(true);
    console.log(add);
    this.renderAlert();
    var item = {
      name: this.props.name,
      image: this.props.image,
      price: this.state.price, 
      quantity: this.state.quantity
    }
    add.push(item)
    console.log(item);
    console.log(add);

    localStorage.setItem("cart", JSON.stringify(add));
    this.generateCart()
 
  }

  generateCart(){
    var items = []
    var cart = this.loadCart(true)
    for(var i=0; i < cart.length; i++)
    {
      var item = cart[i]

      items.push(<CartItems image = {item.image} quantity = {item.quantity} altText = {item.altText} name = {item.name} price = {item.price} />)
    }

    localStorage.setItem("cartItems", JSON.stringify(items));
    return (
      <div>
        {this.renderMiniView()}
      </div>
    )
  }

  loadCart(n = true){
    if (n === false){
      var cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      return cart;
    }
    else{
      var temp = JSON.parse(localStorage.getItem("cart"))
      return temp;
    }

  }

  renderMiniView(){

  }

  changeBack(){
    setTimeout(function() { this.setState({added: "Add To Cart"})}.bind(this), 1500);
  }

  renderAlert(){
    this.setState({added: "ADDED!    :)"})
    this.changeBack();
    
  }





  render() {
  
    return (

      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <h2 className="productTitle">{this.props.name}</h2>

        <div className="detailPane-inner">
          <img className="productImage" src={this.props.image} alt={this.props.altText} />
          <br></br>
          <br></br>
          <div className="productLabel">{this.props.description}</div>
          <br></br>
          <div className="productQuantity">
          <p>Quantity: </p>
          <select id="size" onChange = {this.updatePrice}>
            <option name="1" value= "1" >1</option>
            <option name="2" value= "2" >2</option>
            <option name="3" value= "3" >3</option>
            <option name="4" value= "4" >4</option>
            <option name="5" value= "5" >5</option>
            <option name="6" value= "6" >6</option>
            <option name="7" value= "7" >7</option>
            <option name="8" value= "8" >8</option>
          </select>
          </div>
          <div className="productPrice">${this.state.price}.00</div>
          
        </div>

        <button className="productAdd" onClick= {(ev) => this.addToCart()} >{this.state.added}</button>
        <button className="productCart" onClick= {(ev) => this.changePage()}>Checkout!</button>

      </div>
        
      
    );
  }
}


export default Detail;