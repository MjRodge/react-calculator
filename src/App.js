import React, { Component } from 'react';
import Screen from './screen';
import NumberButtons from './number-buttons';
import OperandButtons from './operand-buttons';
import './css/buttons.css';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      fullInput: 0
    };
  }

  buttonInput = (test) => { //ES6 function declaration to avoid having to bind
    //check input here
    this.setState({ result: this.state.result += test });
    this.setState({ fullInput: this.state.fullInput += test });
  }

  render() {
    return (
      <div id="calc-container">
        <Screen passedResult={this.state.result} passedInput={this.state.fullInput}/>
        <div id="calc-button-container">
          <NumberButtons keyPressed={this.buttonInput} />
          <OperandButtons keyPressed={this.buttonInput} />
        </div>
      </div>
    );
  }
}

export default App;
