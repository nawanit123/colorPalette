import React, { useRef, memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = (props) => {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    openDialog,
    id,
    goToPalette,
  } = props;
  const handleClick = (e) => {
    return goToPalette(id);
  };
  const handleDelete = (e) => {
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
    <div className={classes.root} onClick={handleClick} ref={wrapper}>
      <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};
function arePropsEqual(prevProps, nextProps) {
  return prevProps.label === nextProps.label;
}

export default withStyles(styles)(memo(MiniPalette, arePropsEqual));
