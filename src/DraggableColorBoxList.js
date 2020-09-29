import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { Droppable } from 'react-beautiful-dnd';

const DraggableColorBoxList = ({ colors, removeColorBox, id }) => {
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ height: '100%' }}
        >
          {colors.map((color, i) => (
            <DraggableColorBox
              key={color.name}
              index={i}
              color={color.color}
              name={color.name}
              handleClick={() => removeColorBox(color.name)}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DraggableColorBoxList;
