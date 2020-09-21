import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {palettes.map((palette) => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
