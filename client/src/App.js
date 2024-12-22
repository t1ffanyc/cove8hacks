import './App.css';
import React, { useState } from 'react';
import { Header, Planner, Requirements } from './components/index.js'
// import { DragDropProvider } from './DragDrop/DragDropContext';
// import DroppableContainer from './DragDrop/DroppableContainer';

function App() {
  /* DRAG DROP TESTER
  // create containers we want to be droppable, and items we want to be draggable.
  const [containers, setContainers] = useState({
    container1: [
      { id: 'container1-draggable-1', label: 'Item 1' },
      { id: 'container1-draggable-2', label: 'Item 2' },
    ],
    container2: [
      { id: 'container2-draggable-3', label: 'Item 3' },
      { id: 'container2-draggable-4', label: 'Item 4' },
    ],
  });
  
  // wrap in DragDropProvider, pass prop to access and change the containers. 
  return (
    <DragDropProvider containers={containers} setContainers={setContainers}>
      <div style={{ display: 'flex' }}>
        <DroppableContainer id="container1" />
        <DroppableContainer id="container2" />
      </div>
    </DragDropProvider>
  );
  */
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Planner />
        <div className="line"></div>
        <Requirements style={{ flex:1 }} />
      </div>
    </div>
  );
}

export default App;
