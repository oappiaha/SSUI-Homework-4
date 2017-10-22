import React, { Component } from 'react';
import './App.css';





class MiniViewItems extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
     <div className = "miniBorder">
        <img width = "50px" height = "50px"className="miniImage" src={this.props.image} alt="bun" />
        <p className = "miniInfo">{this.props.name}</p>
        <b>{this.props.quantity}, </b> 
        <b>${this.props.price}.00 </b>

     </div>
    );
  }
}


export default MiniViewItems;