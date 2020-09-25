import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: ' 20%',
    height: '25%',
    display: ' inline-block',
    cursor: ' pointer',
    margin: ' 0 auto',
    position: ' relative',
    textTransform: ' uppercase',
    // marginBottom: ' -3.5px',
    backgroundColor: (props) => props.color,
  },
};

function DraggableColorBox(props) {
  const { classes, name } = props;
  return <div className={classes.root}>{name}</div>;
}

export default withStyles(styles)(DraggableColorBox);
