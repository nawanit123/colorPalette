import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

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
