import { useDroppable } from '@dnd-kit/core';

interface IDroppableWrapper {
    id: string,
    children: React.ReactNode
}

/**
 * A Droppable Wrapper.
 * 
 * @param props 
 *  id: string,         // The unique id of the container this wraps
 *  children: ReactNode // The draggable components that will be wrapped in this droppable frame
 * 
 * @returns The children (draggable components) wrapped within a droppable frame
 */
const DroppableWrapper = (props: IDroppableWrapper) => {
    const { isOver, setNodeRef } = useDroppable({ id: props.id }); // use id of the child container
    
    // when moused over, change styling
    const style = {
        backgroundColor: isOver ? 'lightblue' : '#e2e2e2',
        padding: '16px',
        border: '2px dashed #ccc',
        minHeight: '100px',
        width: '200px',
        marginRight: '16px',
    };
    
    // wrap the container child with droppable functionality.
    return (
        <div ref={setNodeRef} style={style}>
            { props.children }
        </div>
    );
  }
  
  export default DroppableWrapper;