// SpritePreview.js
import React, { useEffect, useState } from 'react';

const SpritePreview = ({ commands }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const executeCommands = async () => {
      for (let command of commands) {
        if (command === 'MOVE') {
          setPosition((pos) => ({ x: pos.x + 10 * Math.cos((rotation * Math.PI) / 180), y: pos.y + 10 * Math.sin((rotation * Math.PI) / 180) }));
        } else if (command === 'TURN') {
          setRotation((rot) => rot + 15);
        }
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay between commands
      }
    };
    executeCommands();
  }, [commands]);

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px', border: '1px solid #ddd', marginTop: '20px' }}>
      <img
        src="c:\Users\sonal\OneDrive\Pictures\Screenshots\catsprite.png"
        alt="sprite"
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          transform: `rotate(${rotation}deg)`,
          transition: 'all 0.5s',
        }}
      />
    </div>
  );
};

export default SpritePreview;
