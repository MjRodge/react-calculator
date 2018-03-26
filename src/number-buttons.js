import React, { Component } from 'react';
import './css/buttons.css';

class NumberButtons extends Component {
  render() {
    const numArray = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="];
    return (
      <div id="calc-number-buttons">
        {numArray.map(function(num, i) {
          return (
            <button value="{num}" key={i}>{num}</button>
          )
        })}
      </div>
    );
  }
}

export default NumberButtons;
