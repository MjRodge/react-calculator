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
        if (this.state.fullInput === '') {
          alert("Enter number before operand");
        } else {
          this.setState({ result: this.state.result = input }); //reset top display
          this.setState({ fullInput: this.state.fullInput += input });
        }
        break;
      case "=":
        this.setState({ result: eval(this.state.fullInput).toString() });
        break;
      case "del":
        this.setState({ result: '' });
        this.setState({ fullInput: '' });
        break;
      case "0":
        if (this.state.result === '') { //Do not allow a zero to be entered in empty screen
          alert("No leading 0 allowed");
        } else {
          this.setState({ result: this.state.result += input });
          this.setState({ fullInput: this.state.fullInput += input });
        }
        break;
      default: //default case handles 0-9 and . clicks
        if (this.state.result === "+" || this.state.result === "-" || this.state.result === "/" || this.state.result === "*") {
          this.setState({ result: this.state.result = input }); //Empty result of operand before updating with number
          this.setState({ fullInput: this.state.fullInput += input });
        } else {
          this.setState({ result: this.state.result += input });
          this.setState({ fullInput: this.state.fullInput += input });
        }
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
