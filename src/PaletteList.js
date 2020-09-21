import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        {palettes.map((palette) => (
          <p>
            <Link to={`palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
