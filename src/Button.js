import React, { Component } from 'react';

class Button extends Component {
  render() {
    // const buttonName = 'Click Me!'
    return (
      <button onClick={this.props.clickHandler}>{this.props.buttonText}</button>
    )
  }
}

export default Button;
