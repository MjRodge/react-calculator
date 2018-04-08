import React, { Component } from 'react';
import './css/buttons.css';

class OperatorButtons extends Component {
  handleClick(op) {
    this.props.keyPressed(op);
  }

  render() {
    const operatorArray = [
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
      <div id="calc-operator-buttons">
        {operatorArray.map(function(op, i) {
          return(
            <button className="calc-button"
              onClick={this.handleClick.bind(this, op.value)}
              key={i}>{op.button}
            </button>
          )
        }, this)}
      </div>
    );
  }
}

export default OperatorButtons;
