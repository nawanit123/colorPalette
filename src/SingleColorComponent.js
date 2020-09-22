import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class SingleColorComponent extends Component {
  constructor(props) {
    super(props);
    this._shade = this.getshade(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex',
    };
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
  changeFormat = (value) => {
    this.setState({ format: value });
  };
  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shade.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        backgroundColor={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColorComponent Palette">
        <Navbar handleChange={this.changeFormat} showAllColors={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorComponent;
