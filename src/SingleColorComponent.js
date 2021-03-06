import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/SingleColorComponentStyles';

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
    const { classes, history } = this.props;
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
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                history.goBack();
              }}
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorComponent);
