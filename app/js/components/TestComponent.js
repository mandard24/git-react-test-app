import React, { Component } from 'react';

export default class TestComponent extends Component{
  render(){
    return(
      <div>
        <h2>Welcome {this.props.user}</h2>
      </div>
    )
  }
}
