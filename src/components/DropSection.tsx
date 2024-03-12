import { Droppable } from "react-beautiful-dnd";
import { Board } from "../styles/dndStyle";
import DragSection from "./DragSection";
import { IBoardProps } from "../interfaces/boardInterface";

const DropSection = ({ todos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
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
