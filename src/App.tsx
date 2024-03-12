import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BoardContainer, BoardGroup } from "./styles/dndStyle";
import { useRecoilState } from "recoil";
import { toDoState } from "./recoil/atom";
import DropSection from "./components/DropSection";

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
            <DropSection />
          </BoardGroup>
        </BoardContainer>
      </DragDropContext>
    </>
  );
};

export default App;
