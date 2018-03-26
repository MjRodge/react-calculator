import React, { Component } from 'react';
import './css/buttons.css';

class OperandButtons extends Component {
  handleClick(op) {
    alert(op);
  }

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
            <button onClick={this.handleClick.bind(this, op.value)} key={i}>{op.button}</button>
          )
        }, this)}
      </div>
    );
  }
}

export default OperandButtons;
