import React, { Component } from 'react';
import Screen from './screen';
import NumberButtons from './number-buttons';
import OperandButtons from './operand-buttons';
import './css/buttons.css';
import './css/App.css';

class App extends Component {
  buttonInput(test) {
    alert(test);
  }

  render() {
    return (
      <div id="calc-container">
        <Screen />
        <div id="calc-button-container">
          <NumberButtons keyPressed={this.buttonInput} />
          <OperandButtons keyPressed={this.buttonInput} />
        </div>
      </div>
    );
  }
}

export default App;
