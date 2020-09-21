import React, { Component } from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedColors from './seedColor.js';
import { generatePalette } from './colorHelpers';

class App extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List Goes here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual Palette</h1>}
        />
      </Switch>

      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
