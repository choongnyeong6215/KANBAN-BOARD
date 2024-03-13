import { Droppable } from "react-beautiful-dnd";
import { Board, BoardTitle, DragArea } from "../styles/dndStyle";
import DragSection from "./DragSection";
import { IBoardProps } from "../interfaces/boardInterface";

const DropSection = ({ todos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <Board ref={provided.innerRef} {...provided.droppableProps}>
          <BoardTitle>{boardId}</BoardTitle>
          <DragArea $isDraggingOver={snapshot.isDraggingOver}>
            {todos.map((v, idx) => (
              <DragSection key={v} v={v} idx={idx} />
            ))}
            {/* 보드 크기 고정 */}
            {provided.placeholder}
          </DragArea>
        </Board>
      )}
    </Droppable>
  );
};

export default DropSection;
