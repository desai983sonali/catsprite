// BlockPanel.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Block = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BLOCK',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '10px', margin: '5px', backgroundColor: '#ccc', cursor: 'move' }}>
      {label}
    </div>
  );
};

const BlockPanel = () => {
  return (
    <div style={{ width: '200px', padding: '10px', backgroundColor: '#f4f4f4', borderRight: '1px solid #ddd' }}>
      <h3>Code Blocks</h3>
      <Block type="MOVE" label="Move 10 steps" />
      <Block type="TURN" label="Turn 15 degrees" />
    </div>
  );
};

export default BlockPanel;
