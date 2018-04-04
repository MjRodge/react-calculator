import React, { Component } from 'react';
import Screen from './screen';
import NumberButtons from './number-buttons';
import OperatorButtons from './operator-buttons';
import './css/buttons.css';
import './css/App.css';

var needsReset = false; //check variable that will reset screen contents after = if next input is a number

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
        if (this.state.fullInput === '') { //do not allow operator symbols as first input
          alert("Enter number before operator");
        } else if (this.state.result === "+" || this.state.result === "-" || this.state.result === "/" || this.state.result === "*") {
          alert("Do not enter two consecutive s");
        } else if (needsReset === true) { //allows chaining of results in subsequent operation
          //eg 15+5 = 20*2 = 40 rather than 25
          this.setState({ fullInput: this.state.result += input });
          this.setState({ result: this.state.result = input });
          needsReset = false;
        } else {
          this.setState({ result: this.state.result = input }); //reset top display
          this.setState({ fullInput: this.state.fullInput += input });
        }
        break;
      case "=":
        if (this.state.result === "+" || this.state.result === "-" || this.state.result === "/" || this.state.result === "*" || this.state.fullInput === "" || this.state.fullInput === ".") {
          alert("Please enter valid equation before pressing =");
        } else {
          this.setState({ result: eval(this.state.fullInput).toString() });
          needsReset = true; //ensures that if next input is numerical screen will reset before updating
        }
        break;
      case "del":
        this.setState({ result: '' });
        this.setState({ fullInput: '' });
        break;
      case "0":
        if (this.state.result === '') { //Do not allow a zero to be entered in empty screen
          alert("No leading 0 allowed");
        } else if (needsReset === true) { //prevents zeros being appended immediately after =
          this.setState({ result: this.state.result = "" });
          this.setState({ fullInput: this.state.fullInput = "" });
        } else {
          this.setState({ result: this.state.result += input });
          this.setState({ fullInput: this.state.fullInput += input });
        }
        break;
      default: //default case handles 0-9 and . clicks
        if (this.state.result === "+" || this.state.result === "-" || this.state.result === "/" || this.state.result === "*") {
          this.setState({ result: this.state.result = input }); //Empty result of operator before updating with number
          this.setState({ fullInput: this.state.fullInput += input });
        } else if (needsReset === true) { //check if = was last input
          this.setState({ result: this.state.result = input }); //Empty result of operator before updating with number
          this.setState({ fullInput: this.state.fullInput = input });
          needsReset = false; //reset = check now that next character inputted was number
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
          <OperatorButtons keyPressed={this.buttonInput} />
        </div>
      </div>
    );
  }
}

export default App;
