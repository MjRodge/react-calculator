import React, { Component } from 'react';
import NumberButtons from './number-buttons';
import OperandButtons from './operand-buttons';
import './css/buttons.css';

class Buttons extends Component {
  render() {
    return (
      <div id="calc-button-container">
        <NumberButtons />
        <OperandButtons />
      </div>
    );
  }
}

export default Buttons;
