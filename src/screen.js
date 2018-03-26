import React, { Component } from 'react';
import './css/screen.css';

class Screen extends Component {
  render() {
    return (
      <div id="calc-screen">
        <p id="calc-result">0</p>
        <p id="calc-full-input">0</p>
      </div>
    );
  }
}

export default Screen;
