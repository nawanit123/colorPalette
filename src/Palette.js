import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
  state = {
    level: 500,
    format: 'hex',
  };
  changeLevel = (level) => {
    this.setState({ level });
  };
  changeFormat = (value) => {
    this.setState({ format: value });
  };
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        backgroundColor={color[format]}
        name={color.name}
        handleChange={this.changeFormat}
      />
    ));
    return (
      <div className="Palette">
        {/* Navbar Goes Here*/}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />

        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer Goes Here */}
      </div>
    );
  }
}

export default Palette;
