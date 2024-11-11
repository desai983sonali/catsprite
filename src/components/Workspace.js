// Workspace.js
//import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Workspace = ({ onAddCommand }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'BLOCK',
    drop: (item) => onAddCommand(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '400px',
        backgroundColor: isOver ? '#f0f0f0' : '#ffffff',
        border: '2px dashed #ddd',
        padding: '10px',
        overflow: 'auto',
      }}
    >
      <h3>Workspace</h3>
    </div>
  );
};

export default Workspace;
