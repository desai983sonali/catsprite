// App.js
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BlockPanel from './components/Blockpanel';
import Workspace from './components/Workspace';
import SpritePreview from './components/SpritePreview';

function App() {
  const [commands, setCommands] = useState([]);

  const handleAddCommand = (command) => {
    setCommands((prevCommands) => [...prevCommands, command]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <BlockPanel />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Workspace onAddCommand={handleAddCommand} />
          <SpritePreview commands={commands} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
