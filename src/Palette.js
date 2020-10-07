import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        history={this.props.history}
        backgroundColor={color[format]}
        name={color.name}
        handleChange={this.changeFormat}
        key={color.id}
        moreURL={`/palette/${id}/${color.id}`}
        showAllColors
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAllColors
        />

        <div className={classes.colors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
