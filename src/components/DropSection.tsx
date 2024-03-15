import { Droppable } from "react-beautiful-dnd";
import { Board, BoardTitle, DragArea, TodoForm } from "../styles/dndStyle";
import DragSection from "./DragSection";
import { IBoardProps } from "../interfaces/boardInterface";
import { useForm } from "react-hook-form";
import { ITodoForm } from "../interfaces/todoInterface";

const DropSection = ({ todos, boardId }: IBoardProps) => {
  // 할일 추가 처리 로직
  const { register, handleSubmit, setValue } = useForm<ITodoForm>();

  // 입력값 유효할 떄 실행
  const isValid = ({ todo }: ITodoForm) => {
    console.log(todo);

    // 입력값 초기화
    setValue("todo", "");
  };

  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <Board ref={provided.innerRef} {...provided.droppableProps}>
          <BoardTitle>{boardId}</BoardTitle>
          <TodoForm onSubmit={handleSubmit(isValid)}>
            <input
              type="text"
              placeholder={`${boardId} 추가`}
              {...register("todo", { required: true })}
            />
            <button>추가</button>
          </TodoForm>
          <DragArea $isDraggingOver={snapshot.isDraggingOver}>
            {todos.map((v, idx) => (
              <DragSection
                key={v.id}
                todoText={v.text}
                todoId={v.id}
                idx={idx}
              />
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
