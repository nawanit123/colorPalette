import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({ colors, removeColorBox }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          distance={1}
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColorBox(color.name)}
        />
      ))}
    </div>
  );
});
export default DraggableColorList;
