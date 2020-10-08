import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import styles from './styles/ColorBoxStyles';

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
            className={clsx(classes.copyOverlay, {
              [classes.showOverLay]: copied,
            })}
          />
          <div
            className={clsx(classes.copyMessage, classes.darkColor, {
              [classes.showMessage]: copied,
            })}
          >
            <h1>Copied!!!</h1>
            <p className={classes.copyText}>{backgroundColor}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.darkColor}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showAllColors && (
            <Link
              to={moreURL}
              onClick={(e) => {
                e.stopPropagation();
              }}
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
