import { useDroppable } from '@dnd-kit/core';
import { useDragDropContext } from './DragDropContext'; // imports the context for drag-drop
import DraggableWrapper from './DraggableWrapper'; // imports our wrapper: takes a component and wraps it in dnd functionality

/*
Container that accesses our droppable containers db. Represents a particular container based on id. Wraps its child item components in DraggableWrapper
props:  id -> the id of the container this component represents
exports:    DroppableContainer -> A container wrapped in droppable functionality. 
*/
function DroppableContainer({ id }) {
    const { containers } = useDragDropContext(); // access list of containers from our context
    const { isOver, setNodeRef } = useDroppable({ id }); // droppable attributes
    
    // when moused over, change styling
    const style = {
        backgroundColor: isOver ? 'lightblue' : '#e2e2e2',
        padding: '16px',
        border: '2px dashed #ccc',
        minHeight: '100px',
        width: '200px',
        marginRight: '16px',
    };
    
    // return the container for 'id', with its items wrapped in our draggable wrapper
    return (
        <div ref={setNodeRef} style={style}>
            {containers[id].map(item => (
            <DraggableWrapper key={id+item.id} id={item.id}>
                <div style={{ padding: '16px', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}>
                {item.label}
                </div>
            </DraggableWrapper>
            ))}
        </div>
    );
  }
  
  export default DroppableContainer;