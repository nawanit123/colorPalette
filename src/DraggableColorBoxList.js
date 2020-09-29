import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const DraggableColorBoxList = ({ colors, removeColorBox, id }) => {
  const onDragEnd = (reOrderdedColors) => {
    //reorder the colors of colors array
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id}>
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
    </DragDropContext>
  );
};

export default DraggableColorBoxList;
