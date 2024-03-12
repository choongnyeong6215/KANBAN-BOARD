import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Board, BoardContainer, BoardGroup, Card } from "./styles/dndStyle";
import { useRecoilState } from "recoil";
import { toDoState } from "./recoil/atom";

const App = () => {
  const [todos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    const updatedToDos = [...todos];

    // 영역 밖에 드롭한 경우
    if (!destination) return;

    updatedToDos.splice(source.index, 1);

    updatedToDos.splice(destination.index, 0, draggableId);

    setToDos(updatedToDos);
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardContainer>
          <BoardGroup>
            <Droppable droppableId="drop_section">
              {(provided) => (
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                  {todos.map((v, idx) => (
                    <Draggable key={v} draggableId={v} index={idx}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          {v}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {/* 보드 크기 고정 */}
                  {provided.placeholder}
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
