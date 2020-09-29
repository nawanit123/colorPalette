import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Draggable } from 'react-beautiful-dnd';

const styles = {
  root: {
    width: ' 20%',
    height: '25%',
    display: ' inline-block',
    cursor: ' pointer',
    margin: ' 0 auto',
    position: ' relative',
    textTransform: ' uppercase',
    marginBottom: ' -4.5px',
    backgroundColor: (props) => props.color,
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    left: '0px',
    padding: '10px',
    letterSpacing: '1px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
  },
};
const DraggableColorBox = (props) => {
  const { classes, name, handleClick, index } = props;

  return (
    <Draggable draggableId={name} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={classes.root}
        >
          <div className={classes.boxContent}>
            <span>{name}</span>
            <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(DraggableColorBox);
