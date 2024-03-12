import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { BoardContainer, BoardGroup } from "../styles/dndStyle";
import { useRecoilState } from "recoil";
import { toDoState } from "../recoil/atom";
import DropSection from "./DropSection";

const DndSection = () => {
  const [todos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    // const updatedToDos = [...todos];
    // // 영역 밖에 드롭한 경우
    // if (!destination) return;
    // updatedToDos.splice(source.index, 1);
    // updatedToDos.splice(destination.index, 0, draggableId);
    // setToDos(updatedToDos);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContainer>
        <BoardGroup>
          {/* 카테고리로 drop section 분류 */}
          {Object.keys(todos).map((v) => (
            <DropSection key={v} boardId={v} todos={todos[v]} />
          ))}
        </BoardGroup>
      </BoardContainer>
    </DragDropContext>
  );
};

export default DndSection;
