import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const DraggableColorBoxList = ({ colors, removeColorBox }) => {
  const onDragEnd = (reOrderdedColors) => {
    //reorder the colors of colors array
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ height: '100%' }}>
        <Droppable droppableId={colors.id}>
          {(provided) =>
            colors.map((color, i) => (
              <DraggableColorBox
                ref={provided.innerRef}
                {...provided.droppableProps}
                key={color.name}
                index={i}
                color={color.color}
                name={color.name}
                handleClick={() => removeColorBox(color.name)}
              >
                {provided.placeholder}
              </DraggableColorBox>
            ))
          }
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DraggableColorBoxList;
