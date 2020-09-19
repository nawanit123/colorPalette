import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer Goes Here */}
      </div>
    );
  }
}

export default Palette;
