import React, { Component } from 'react';
import NumberButtons from './number-buttons';
import './css/buttons.css';

class Buttons extends Component {
  render() {
    return (
      <div id="calc-button-container">
        <NumberButtons />
        <div id="calc-operand-buttons">
          // Components for operand buttons here
        </div>
      </div>
    );
  }
}

export default Buttons;
