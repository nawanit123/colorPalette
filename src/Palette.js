import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';
import { Link } from 'react-router-dom';

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
    const { classes, history } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        history={history}
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
        <div className={classes.link}>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              history.push('/');
            }}
          >
            GO BACK
          </Link>
        </div>

        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
