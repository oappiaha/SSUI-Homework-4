import React, { Component } from 'react';
import './App.css';

import buns1 from './resources/images/buns2.jpeg';
import buns2 from './resources/images/buns3.jpeg';


class About extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "App-about">
        

        <h3 className = "App-h3">“Best Cinnamon Rolls <br></br> in the
          Western Hemisphere.” <br></br> 
          -The New Yorker
        </h3>
        <img src={buns2} className="App-aboutBuns1" alt="The Bun" />

        <p className="App-aboutUs">
          Welcome to the Bun Bun Bake Shop where our world renowned cinnamon rolls will have your mouth drooling for hours. <br></br>
          Our cinnamon rolls are made with dough battered for hours in Switzerland and cinnamon straight from Sri-Lanka. <br></br>
          Our chefs create each cinnamon roll with deliberate care and best of all.. LOVE!
        </p>

        <img src={buns1} className="App-aboutBuns2" alt="The Buns" />
        
      </div>
    );
  }
}


export default About;

