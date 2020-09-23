import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  PaletteFooter: {
    display: ' flex',
    justifyContent: ' flex-end',
    backgroundColor: ' white',
    height: ' 5vh',
    fontWeight: ' bold',
    '& .emoji': {
      fontSize: '1.5rem',
      margin: '0 1rem',
    },
  },
};

const Footer = (props) => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(Footer);
