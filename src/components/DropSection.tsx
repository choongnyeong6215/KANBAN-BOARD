import { Droppable } from "react-beautiful-dnd";
import { Board } from "../styles/dndStyle";
import { toDoState } from "../recoil/atom";
import { useRecoilValue } from "recoil";
import DragSection from "./DragSection";

const DropSection = () => {
  const todos = useRecoilValue(toDoState);

  return (
    <Droppable droppableId="drop_section">
      {(provided) => (
        <Board ref={provided.innerRef} {...provided.droppableProps}>
          {todos.map((v, idx) => (
            <DragSection key={v} v={v} idx={idx} />
          ))}
          {/* 보드 크기 고정 */}
          {provided.placeholder}
        </Board>
      )}
    </Droppable>
  );
};

export default DropSection;
