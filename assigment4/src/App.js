import React, { Component } from 'react';
import './App.css';
import Shop from './Shop.js';
import Cart from './Cart.js';
import About from './About.js';
import MiniView from './MiniView.js';
import logo from './resources/images/muffin.png';
import roll from './resources/images/roll.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      cart: 0,
      miniView: null
    };
    this.loadCart(false);
  }


  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageView() {
    if(this.state.page === 0)
    
      return <About/>
    if(this.state.page === 1)
 
      return <Shop/>
    if(this.state.page === 2)

      return <Cart/>
  }

  setCart(){
 
    if (localStorage.getItem("cartItems") !== null){
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));
      var len = cartItems.length
      this.renderMini();
      this.setState({cart: len});

    }
  }

  loadCart(n = true){
    console.log("HWY WAOWA")
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

  renderMini(){
    return <MiniView/>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br>
          </br>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bun Bun Bake Shop</h1>

           
              
              <div className = "App-navMenu" >
                <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={(ev) => this.setState({page: 0})}>About</div>
                <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >Shop</div>
                <div class="tooltip">
                  <div className = {"App-navMenu-button" + (this.state.page === 2 ? " active" : "")} onClick={(ev) => this.setState({page: 2})} ><img src={roll} className="App-rollIcon" alt="roll cart" /> {this.state.cart}</div>
                    {this.renderMini()}
                  </div>
              </div>
              

        </header>
        <div onClick = {(ev) => this.setCart()}> 
        
        {this.renderPageView()}
        </div>
      </div>
    );
  }
}

export default App;
