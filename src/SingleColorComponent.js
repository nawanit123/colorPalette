import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './SingleColorComponent.css';
import { withStyles } from '@material-ui/styles';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  colors: {
    height: '90%',
  },
  goBack: {
    position: 'relative',
    backgroundColor: 'black',
    display: 'inline-block',
    width: '20%',
    height: '50%',
    marginBottom: '-4.5px',
    '& a': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100px',
      height: '30px',
      marginLeft: '-50px',
      marginTop: '-15px',
      outline: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      color: 'white',
      border: 'none',
      textDecoration: 'none',
      textAlign: 'center',
    },
  },
};

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
    const { classes } = this.props;
    const { format } = this.state;
    const colorBoxes = this._shade.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        backgroundColor={color[format]}
        showAllColors={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showAllColors={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorComponent);
