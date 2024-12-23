import { useDraggable } from '@dnd-kit/core';

interface IDraggableWrapper {
    id: string,
    children: React.ReactNode
}

/**
 * Draggable Wrapper. Wraps draggable functionality around a child component.
 * 
 * @param props: IDraggableWrapper
 *  id: string,         // Unique id for the child component
 *  children: ReactNode // The child component to be wrapped
 * 
 * @returns The child component wrapped with draggable functionality
 */
const DraggableWrapper = ( props: IDraggableWrapper ) => { 
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: props.id }); // draggable attributes

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
            { props.children }
        </div>
    );
};

export default DraggableWrapper;