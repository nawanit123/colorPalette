import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

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
