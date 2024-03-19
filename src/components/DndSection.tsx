import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import {
  BoardContainer,
  BoardGroup,
  TrashCan,
  Header,
  ModeBtn,
} from "../styles/dndStyle";
import { useRecoilState } from "recoil";
import { boardModal, isDarkMode, toDoState } from "../recoil/atom";
import DropSection from "./DropSection";
// react-icons
import { FaTrashAlt } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const DndSection = () => {
  const [todos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    // console.log(draggableId, source, destination);
    // 보드 밖에 드롭한 경우
    if (!destination) return;

    // 할일 삭제
    if (destination.droppableId === "삭제") {
      setToDos((prevToDos) => {
        const deleteTask = [...prevToDos[source.droppableId]];

        deleteTask.splice(source.index, 1);

        return {
          ...prevToDos,
          [source.droppableId]: deleteTask,
        };
      });
    } else if (source.droppableId === destination?.droppableId) {
      // 같은 카테고리로 이동한 경우
      setToDos((prevTodos) => {
        const updateBoard = [...prevTodos[destination.droppableId]];

        // 움직인 리스트
        const movedTodo = updateBoard[source.index];

        updateBoard.splice(source.index, 1);
        updateBoard.splice(destination.index, 0, movedTodo);

        // 보드 최신화
        return {
          ...prevTodos,
          [destination.droppableId]: updateBoard,
        };
      });
    }
    // 다른 카테고리로 이동한 경우
    else {
      setToDos((prevTodos) => {
        const originalBoard = [...prevTodos[source.droppableId]];

        const updateBoard = [...prevTodos[destination.droppableId]];

        // 움직인 리스트
        const movedTodo = originalBoard[source.index];

        originalBoard.splice(source.index, 1);
        updateBoard.splice(destination.index, 0, movedTodo);

        // 보드 최신화
        return {
          ...prevTodos,
          [source.droppableId]: originalBoard,
          [destination.droppableId]: updateBoard,
        };
      });
    }
  };

  const [isDark, setIsDark] = useRecoilState(isDarkMode);

  // 모드 변경
  const handleChgMode = () => {
    setIsDark(!isDark);
    localStorage.setItem("mode", String(!isDark));
  };

  // 보드 추가 입력 모달
  const [modalOpen, setModalOpen] = useRecoilState(boardModal);

  const addNewBoard = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Header>
        <FaFolderPlus className="newBoard" onClick={addNewBoard} />
        <ModeBtn onClick={handleChgMode}>
          {isDark ? (
            <FaMoon className="lightMode" />
          ) : (
            <IoIosSunny className="darkMode" />
          )}
        </ModeBtn>
      </Header>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardContainer>
          <BoardGroup>
            {/* 카테고리로 drop section 분류 */}
            {Object.keys(todos).map((v) => (
              <DropSection key={v} boardId={v} todos={todos[v]} />
            ))}
          </BoardGroup>
        </BoardContainer>
        <Droppable droppableId="삭제">
          {(provided, snapshot) => (
            <TrashCan
              ref={provided.innerRef}
              {...provided.droppableProps}
              $isDraggingOver={snapshot.isDraggingOver}
            >
              <FaTrashAlt className="logo" />
            </TrashCan>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DndSection;
