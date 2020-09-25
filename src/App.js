import React, { Component } from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedColors from './seedColor.js';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorComponent from './SingleColorComponent';
import NewPalette from './NewPalette';

class App extends Component {
  state = { palettes: seedColors };
  findPalette = (id) => {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    });
  };
  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <PaletteList palettes={this.state.palettes} {...routerProps} />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={(routerProps) => (
            <NewPalette {...routerProps} savePalette={this.savePalette} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routerProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routerProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorComponent
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
