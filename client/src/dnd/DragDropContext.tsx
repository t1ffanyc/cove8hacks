import { createContext, useContext, useCallback } from 'react';
import { DndContext, DragEndEvent, DragOverEvent } from '@dnd-kit/core'; // core dragdrop utilities

/**
 * Drag-Drop Context
 * 
 * Our DroppableContainers and DraggableWrappers (draggable items) use this context so they can display the component they are wrapping.
 * A 
 */
export interface IItem {
    id: string
}

export interface IContainers {
    [key: string]: IItem[];
}

interface IDragDropContext {
    containers: IContainers
    setContainers: React.Dispatch<React.SetStateAction<IContainers>>;
}

interface IDndProvider {
    containers: IContainers,
    setContainers: React.Dispatch<React.SetStateAction<IContainers>>;
    children: React.ReactNode
}

// creating a react context so child components can access our containers db.
const DrapDropContext = createContext<IDragDropContext>({
    containers: {}, // Initialize with empty containers
    setContainers: () => {},
});

/* 
Parent wrapper for all our draggable-droppable content.
props:  containers -> the db for our containers.
        setContainers -> set state of containers db.
        children -> the components that represent droppable containers
exports:
        DragDropProvider: a component to wrap around our droppable containers
        useDragDropContext: a function that simplifies using useContext() for child components. 
*/
export function DndProvider(props: IDndProvider) {
    const { containers, setContainers, children } = props;
    // on drag end: 
    const handleDragEnd = (e: DragEndEvent) => {
        console.log("Drag Ended!");
    }
    const handleDragOver = (e: DragOverEvent) => {
        console.log("Dragged Over");
    }
    // return the child components wrapped in our DndContext. child components have access to 'containers' and 'handleDragEnd' since we created a react context
    return (
        <DrapDropContext.Provider value={{ containers, setContainers }}>
            <DndContext onDragEnd={handleDragEnd} onDragOver={handleDragOver} >
                {children}
            </DndContext>
        </DrapDropContext.Provider>
    );
};  

// makes it easy for child components to use this context
export function useDragDropContext() {
    return useContext(DrapDropContext);
};
