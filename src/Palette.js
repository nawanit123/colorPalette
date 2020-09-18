import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  state = {};
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox backgroundColor={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar Goes Here*/}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer Goes Here */}
      </div>
    );
  }
}

export default Palette;
