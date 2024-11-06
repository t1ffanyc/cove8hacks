/* 
Parent wrapper for all our draggable-droppable content.
props:  containers -> the db for our containers.
        setContainers -> set state of containers db.
        children -> the components that represent droppable containers
exports:
        DragDropProvider: a component to wrap around our droppable containers
        useDragDropContext: a function that simplifies using useContext() for child components. 
*/

import { createContext, useContext, useCallback } from 'react';
import { DndContext } from '@dnd-kit/core'; // core dragdrop utilities

// we create a react context so child components can access our droppable containers and handleDragEnd() function.
const DragDropContext = createContext();

export function DragDropProvider({ containers, setContainers, children }) {
    // on drag end: 
    const handleDragEnd = useCallback(({ active, over }) => {
        if (active.id !== over.id) { 
            const prevContainers = containers;
            // Right now id's have the form container#-draggable-#
            const activeContainerId = active.id.split('-')[0];
            const overContainerId = over.id;
            // Create copies of the container arrays
            const activeContainer = containers[activeContainerId];
            const overContainer = containers[overContainerId];

            // testing
            console.log(JSON.stringify(activeContainer, null, 2));
            console.log(JSON.stringify(overContainer, null, 2));
            
            // Find the dragged item in the active container
            const movedItem = activeContainer.find(item => item.id === active.id);
            console.log(`movedItem: ${movedItem}`);
            if (movedItem) {
                // Remove the item from the active container
                activeContainer.splice(activeContainer.indexOf(movedItem), 1);
                movedItem.id = `${overContainerId}-draggable-${active.id.split('-')[2]}`;
                // Add the item to the new container
                overContainer.push(movedItem);
            }
            //testing
            console.log(JSON.stringify(activeContainer, null, 2));
            console.log(JSON.stringify(overContainer, null, 2));

            prevContainers[activeContainerId] = activeContainer;
            prevContainers[overContainerId] = overContainer;
            setContainers(prevContainers);
        }
    }, [setContainers]);

    // return the child components wrapped in our DndContext. child components have access to 'containers' and 'handleDragEnd' since we created a react context
    return (
        <DragDropContext.Provider value={{ containers, handleDragEnd }}>
            <DndContext onDragEnd={handleDragEnd}>
                {children}
            </DndContext>
        </DragDropContext.Provider>
    );
};  

// makes it easy for child components to use this context
export function useDragDropContext() {
    return useContext(DragDropContext);
};
