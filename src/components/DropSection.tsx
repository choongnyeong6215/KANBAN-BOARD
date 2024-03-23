import { Droppable } from "react-beautiful-dnd";
import {
  Board,
  BoardTitle,
  DragArea,
  TodoForm,
  AddTaskBtn,
  BoardHeader,
} from "../styles/dndStyle";
import DragSection from "./DragSection";
import { IBoardProps } from "../interfaces/boardInterface";
import { useForm } from "react-hook-form";
import { ITodoForm } from "../interfaces/todoInterface";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../recoil/atom";
// react-icons
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const DropSection = ({ todos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);

  // react-hook-form
  const { register, handleSubmit, setValue } = useForm<ITodoForm>();

  // 입력값 유효할 떄 실행
  const isValid = ({ todo }: ITodoForm) => {
    // 새로 입력한 리스트
    const newTodo = {
      id: Date.now(),
      text: todo,
    };

    // 보드 최신화
    setToDos((prevToDos) => {
      return {
        ...prevToDos,
        [boardId]: [...prevToDos[boardId], newTodo],
      };
    });

    // 입력값 초기화
    setValue("todo", "");
  };

  // 보드 삭제 로직
  const handleDeleteBoard = () => {
    setToDos((prevToDos) => {
      const updateToDos = { ...prevToDos };

      delete updateToDos[boardId];

      return {
        ...updateToDos,
      };
    });
  };

  return (
    <Board>
      <BoardHeader>
        <BoardTitle>{boardId}</BoardTitle>
        <FaRegTrashCan className="deletBoard" onClick={handleDeleteBoard} />
      </BoardHeader>
      <TodoForm onSubmit={handleSubmit(isValid)}>
        <input
          type="text"
          placeholder={`${boardId} 기록하기`}
          {...register("todo", { required: true })}
        />
        <AddTaskBtn>
          <FaCirclePlus className="addTask" />
        </AddTaskBtn>
      </TodoForm>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <DragArea
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
            $DraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
          >
            {todos.map((v, idx) => (
              <DragSection
                key={v.id}
                todoText={v.text}
                todoId={v.id}
                idx={idx}
                boardId={boardId}
              />
            ))}
            {/* 보드 크기 고정 */}
            {provided.placeholder}
          </DragArea>
        )}
      </Droppable>
    </Board>
  );
};

export default DropSection;
