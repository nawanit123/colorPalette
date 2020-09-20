import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
  state = {
    level: 500,
  };
  changeLevel = (level) => {
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox backgroundColor={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar Goes Here*/}
        <Navbar level={level} changeLevel={this.changeLevel} />

        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer Goes Here */}
      </div>
    );
  }
}

export default Palette;
