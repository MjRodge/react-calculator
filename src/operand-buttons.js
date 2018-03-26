import React, { Component } from 'react';
import './css/buttons.css';

class OperandButtons extends Component {
  render() {
    const operandArray = [
      {
        value: "del", // Value will be used for arithmetic
        button: "DEL" // Button will be used for display
      },
      {
        value: "/",
        button: "\u00F7"
      },
      {
        value: "*",
        button: "\u00D7"
      },
      {
        value: "-",
        button: "\u2212"
      },
      {
        value: "+",
        button: "\u002B"
      }
    ];
    return (
      <div id="calc-operand-buttons">
        {operandArray.map(function(op, i) {
          return(
            <button value={op.value} key={i}>{op.button}</button>
          )
        })}
      </div>
    );
  }
}

export default OperandButtons;
