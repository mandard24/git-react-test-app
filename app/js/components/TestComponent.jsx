import React, { Component } from 'react';

export default class TestComponent extends Component{
  render(){
    return(
      <div>
        <h2>Welcome {this.props.user}</h2>
        <h3>Adding some more code on the newly created branch</h3>
      </div>
    )
  }
}
