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
      result: 0
    };
  }

  buttonInput = (test) => { //ES6 function declaration to avoid having to bind
    this.setState({ result: test });
  }

  render() {
    return (
      <div id="calc-container">
        <Screen passedResult={this.state.result}/>
        <div id="calc-button-container">
          <NumberButtons keyPressed={this.buttonInput} />
          <OperandButtons keyPressed={this.buttonInput} />
        </div>
      </div>
    );
  }
}

export default App;
