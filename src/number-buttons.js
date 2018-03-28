import React, { Component } from 'react';
import './css/buttons.css';

class NumberButtons extends Component {
  handleClick(num) {
    alert(num);
    //this.props.clickHandler(this.props.name);
  }

  render() {
    const numArray = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="];
    return (
      <div id="calc-number-buttons">
        {numArray.map(function(num, i) {
          return (
            <button
              onClick={this.handleClick.bind(this, num)}
              key={i}>{num}
            </button>
          )
        }, this)}
      </div>
    );
  }
}

export default NumberButtons;
