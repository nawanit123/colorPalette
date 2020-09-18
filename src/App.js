import React, { Component } from 'react';
import Palette from './Palette';
import './App.css';
import seedColors from './seedColor.js';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
