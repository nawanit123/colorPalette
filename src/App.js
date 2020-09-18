import React, { Component } from 'react';
import Palette from './Palette';
import './App.css';
import seedColors from './seedColor.js';
import { generatePalette } from './colorHelpers';

class App extends Component {
  state = {};
  render() {
    console.log(generatePalette(seedColors[3]));
    return (
      <div className="App">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
