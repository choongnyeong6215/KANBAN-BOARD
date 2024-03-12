import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Board, BoardContainer, BoardGroup, Card } from "./styles/dndStyle";

const onDragEnd = () => {};

const App = () => {
  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardContainer>
          <BoardGroup>
            <Droppable droppableId="drop_section">
              {(provided) => (
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                  <Draggable draggableId="0" index={0}>
                    {(prodivded) => (
                      <Card
                        ref={prodivded.innerRef}
                        {...prodivded.dragHandleProps}
                        {...prodivded.draggableProps}
                      >
                        first
                      </Card>
                    )}
                  </Draggable>
                  <Draggable draggableId="1" index={1}>
                    {(prodivded) => (
                      <Card
                        ref={prodivded.innerRef}
                        {...prodivded.dragHandleProps}
                        {...prodivded.draggableProps}
                      >
                        second
                      </Card>
                    )}
                  </Draggable>
                  <Draggable draggableId="2" index={2}>
                    {(prodivded) => (
                      <Card
                        ref={prodivded.innerRef}
                        {...prodivded.dragHandleProps}
                        {...prodivded.draggableProps}
                      >
                        third
                      </Card>
                    )}
                  </Draggable>
                </Board>
              )}
            </Droppable>
          </BoardGroup>
        </BoardContainer>
      </DragDropContext>
    </>
  );
};

export default App;
