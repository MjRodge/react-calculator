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
      result: '',
      fullInput: ''
    };
  }

  buttonInput = (input) => { //ES6 function declaration to avoid having to bind
    //check input here
    switch (input) {
      case "+":
      case "-":
      case "*":
      case "/":
        this.setState({ result: this.state.result = input }); //reset top display
        this.setState({ fullInput: this.state.fullInput += input });
        break;
      case "=":
        this.setState({ result: eval(this.state.fullInput).toString() });
        break;
      case "del":
        this.setState({ result: '' });
        this.setState({ fullInput: '' });
        break;
      default: //default case handles 0-9 and . clicks
        this.setState({ result: this.state.result += input });
        this.setState({ fullInput: this.state.fullInput += input });
    }
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
