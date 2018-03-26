import React, { Component } from 'react';
import Screen from './screen';
import Buttons from './buttons';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div id="calc-container">
        <Screen />
        <Buttons />
      </div>
    );
  }
}

export default App;
