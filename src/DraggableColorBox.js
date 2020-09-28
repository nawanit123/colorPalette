import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from "@material-ui/icons/Delete";

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
    "&:hover svg":{
      color:"white",
      transform:"scale(1.5)"
    }
  },
  boxContent:{
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    left: '0px',
    padding: '10px',
    letterSpacing: '1px',
    fontSize: '12px',
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  },
  deleteIcon:{
    transition:"all 0.3s ease-in-out",
  },
};

function DraggableColorBox(props) {
  const { classes, name } = props;
  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
      <span>{name}</span>
      <DeleteIcon className={classes.deleteIcon}/>
      </div>
  </div>);
}

export default withStyles(styles)(DraggableColorBox);
