import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

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
    const { name, backgroundColor, moreURL, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(backgroundColor).luminance() <= 0.2;
    return (
      <CopyToClipboard text={backgroundColor} onCopy={this.handleClick}>
        <div style={{ backgroundColor }} className="ColorBox">
          <div
            style={{ backgroundColor }}
            className={`copy-overlay ${copied ? 'show' : ''}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1 className={`${isDarkColor && 'light-text'}`}>Copied!!!</h1>
            <p className={`${isDarkColor && 'light-text'}`}>
              {backgroundColor}
            </p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={`${!isDarkColor ? 'dark-text' : 'light-text'}`}>
                {name}
              </span>
            </div>
            <button
              className={`copy-button ${isDarkColor && 'ColorBox light-text'}`}
            >
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreURL} onClick={(e) => e.stopPropagation()}>
              <span className={`see-more ${!isDarkColor && 'dark-text'}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
