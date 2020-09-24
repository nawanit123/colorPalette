import React, { Component } from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedColors from './seedColor.js';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorComponent from './SingleColorComponent';

class App extends Component {
  state = {};
  findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <PaletteList palettes={seedColors} {...routerProps} />
          )}
        />
        <Route
          exact
          path-="/palette/new"
          render={() => <h1>Hello from NewPalette Route</h1>}
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
