import DroppableWrapper from "./DroppableWrapper"
import DraggableWrapper from "./DraggableWrapper"
import { useDragDropContext } from "./DragDropContext";

const TestItem = ({ id }: { id: string }) => {
    return (
        <div style={{ padding: '16px', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}>
            Here's my id: {id}
        </div>
    );
}

const TestContainer = ({ id }: { id: string }) => {
    const { containers } = useDragDropContext();

    return (
      <div style={{ padding: '16px', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}>
        <h3>A title for {id}!</h3>
        <DroppableWrapper id={id}>
            {containers[id].map(item => (
                <DraggableWrapper key={item.id} id={item.id} >
                    <TestItem id={item.id} />
                </DraggableWrapper>
            ))}
        </DroppableWrapper>
      </div>  
    );
}

export default TestContainer;