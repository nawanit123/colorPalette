import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/FooterStyles';

const Footer = (props) => {
  const { paletteName, emoji, classes, history } = props;
  return (
    <footer className={classes.PaletteFooter}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          history.push('/');
        }}
      >
        GO BACK
      </Button>
      <span>
        {paletteName} <span className="emoji">{emoji}</span>
      </span>
    </footer>
  );
};

export default withStyles(styles)(Footer);
