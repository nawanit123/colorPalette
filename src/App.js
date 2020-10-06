import React, { Component } from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedColors from './seedColor.js';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorComponent from './SingleColorComponent';
import NewPalette from './NewPalette';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savedPalettes || seedColors };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  deletePalette(id) {
    this.setState((prevState) => {
      return {
        palettes: prevState.palettes.filter((palette) => palette.id !== id),
      };
    }, this.syncLocalStorage);
  }
  syncLocalStorage() {
    //Add savedPalettes to local Storage
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={500}
            >
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={(routerProps) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routerProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/new"
                  render={(routerProps) => (
                    <Page>
                      <NewPalette
                        {...routerProps}
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routerProps) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routerProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <Page>
                      <SingleColorComponent
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
