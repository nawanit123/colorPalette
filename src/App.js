import React, { Component } from 'react';
import Palette from './Palette';
import './App.css';
import seedColors from './seedColor.js';
import { generatePalette } from './colorHelpers';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
