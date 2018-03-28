import React, { Component } from 'react';
import './css/screen.css';

class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        result: 0,
        fullInput: 0
    };
    //handleClick = handleClick.bind(this);
  }

  render() {
    return (
      <div id="calc-screen">
        <p id="calc-result">{this.state.result}</p>
        <p id="calc-full-input">{this.state.fullInput}</p>
      </div>
    );
  }
}

export default Screen;
