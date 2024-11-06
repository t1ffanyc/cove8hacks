import { useDraggable } from '@dnd-kit/core';

/* 
Wraps an item component in Draggable styling and functionality
props:  id -> a unique id for this particular item
        children -> item component
*/
function DraggableWrapper({ id, children }) { 
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id }); // draggable attributes

    // styling for draggable item
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined, 
        cursor: 'grab',
        padding: '8px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ddd',
        margin: '4px',
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default DraggableWrapper;