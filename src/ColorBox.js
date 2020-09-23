import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles = {
  colorBox: {
    width: ' 20%',
    height: (props) => (props.showAllColors ? '25%' : '50%'),
    display: ' inline-block',
    cursor: ' pointer',
    margin: ' 0 auto',
    position: ' relative',
    textTransform: ' uppercase',
    marginBottom: ' -4.5px',
    color: ' rgba(0, 0, 0, 0.5)',
  },
  textStyle: {
    color: (props) =>
      chroma(props.backgroundColor).luminance() >= 0.7
        ? 'rgba(0,0,0,0.5)'
        : 'rgba(255,255,255,0.9',
  },
  darkColor: {
    color: (props) =>
      chroma(props.backgroundColor).luminance() <= 0.05
        ? 'rgba(255,255,255,0.9'
        : 'rgba(0,0,0,0.5)',
  },
  seeMoreLink: {
    color: 'white',
    textDecoration: 'none',
  },
  seeMore: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    color: (props) =>
      chroma(props.backgroundColor).luminance() >= 0.7
        ? 'rgba(0,0,0,0.5)'
        : 'rgba(255,255,255,0.9',

    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textDecoration: 'none',
    outline: 'none',
  },
  copyButton: {
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
    opacity: 0,
  },
};

class ColorBox extends Component {
  state = { copied: false };
  handleClick = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };
  render() {
    const {
      name,
      backgroundColor,
      moreURL,
      showAllColors,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={backgroundColor} onCopy={this.handleClick}>
        <div style={{ backgroundColor }} className={classes.colorBox}>
          <div
            style={{ backgroundColor }}
            className={`copy-overlay ${copied ? 'show' : ''}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!!!</h1>
            <p>{backgroundColor}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.darkColor}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showAllColors && (
            <Link
              to={moreURL}
              onClick={(e) => e.stopPropagation()}
              className={classes.seeMoreLink}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
