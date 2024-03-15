import { Droppable } from "react-beautiful-dnd";
import {
  Board,
  BoardTitle,
  DragArea,
  TodoRefContainer,
} from "../styles/dndStyle";
import DragSection from "./DragSection";
import { IBoardProps } from "../interfaces/boardInterface";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const DropSection = ({ todos, boardId }: IBoardProps) => {
  const todoRef = useRef<HTMLInputElement>(null);

  // input 활성화
  const addTodo = () => todoRef.current?.focus();

  const toDoForm = useForm();

  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <Board ref={provided.innerRef} {...provided.droppableProps}>
          <BoardTitle>{boardId}</BoardTitle>
          <TodoRefContainer>
            <input ref={todoRef} placeholder="할 일을 기록해보세요!" />
            <button onClick={addTodo}>추가</button>
          </TodoRefContainer>
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
