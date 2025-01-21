import './App.css';
import React, { useState } from 'react';
import { Header, Planner, Requirements } from './components/index.js'
import { DndProvider, IContainers } from './dnd/DragDropContext';
import DroppableWrapper from 'dnd/DroppableWrapper';
import TestContainer from 'dnd/TestContainer';
// import DroppableContainer from './DragDrop/DroppableContainer';

function App() {
  // DRAG DROP TESTER
  const [containers, setContainers] = useState<IContainers>({
    container1: [
      { id: 'draggable-1'},
      { id: 'draggable-2'},
    ],
    container2: [
      { id: 'draggable-3' },
      { id: 'draggable-4' },
    ],
  });
  
  // wrap in DragDropProvider, pass prop to access and change the containers. 
  return (
    <DndProvider containers={containers} setContainers={setContainers}>
      <div style={{ display: 'flex' }}>
        <TestContainer id={"container1"} />
        <TestContainer id={"container2"} />
      </div>
    </DndProvider>
  );
  
  // return (
  //   <div className="App">
  //     <Header />
  //     <div className="container">
  //       <Planner />
  //       <div className="line"></div>
  //       <Requirements />
  //     </div>
  //   </div>
  // );
}

export default App;
