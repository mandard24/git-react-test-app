import React, { Component } from 'react';

export default class UserName extends Component{
  render(){
    return (
      <div>
        <h3>Hello {this.props.user}</h3>
        <p>Adding some more changes to code from master branch...</p>
      </div>
    )
  }
}
