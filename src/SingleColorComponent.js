import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorComponent extends Component {
  constructor(props) {
    super(props);
    this._shade = this.getshade(this.props.palette, this.props.colorId);
    console.log(this._shade);
  }
  getshade(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key of Object.entries(allColors).map((e) => e[0])) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shade.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        backgroundColor={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorComponent;
