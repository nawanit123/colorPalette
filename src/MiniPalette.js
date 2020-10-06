import React, { useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, openDialog, id } = props;
  const handleClick = (e) => {
    e.stopPropagation();
    openDialog(id);
  };
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  const wrapper = useRef();
  return (
    <div className={classes.root} onClick={props.handleClick} ref={wrapper}>
      <DeleteIcon
        className={classes.deleteIcon}
        styles={{ transition: 'all .3s ease-in-out' }}
        onClick={handleClick}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
