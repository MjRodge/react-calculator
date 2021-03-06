import React, { Component } from 'react';
import './css/screen.css';

class Screen extends Component {
  render() {
    return (
      <div id="calc-screen">
        <p id="calc-result">{this.props.passedResult}</p>
        <p id="calc-full-input">{this.props.passedInput}</p>
      </div>
    );
  }
}

export default Screen;
