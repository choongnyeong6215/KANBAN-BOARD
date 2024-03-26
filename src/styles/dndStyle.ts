import styled from "styled-components";

// DragDropContext
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  .newBoard,
  .darkMode,
  .lightMode {
    font-size: 3rem;
    color: ${(props) => props.theme.iconColor};
    cursor: pointer;
    margin-left: 2rem;
    &:hover {
      color: royalblue;
    }
  }
`;

export const ModeBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 5rem auto;
`;

export const BoardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 2rem;
`;

export const TrashCan = styled.div<{ $isDraggingOver: boolean }>`
  width: 5rem;
  height: 5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 3rem;
  padding: 1rem;
  background-color: ${(props) =>
    props.$isDraggingOver ? "tomato" : "transparent"};
  border-radius: 2.5rem;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
  .logo {
    color: ${(props) => props.theme.iconColor};
    cursor: pointer;
  }
`;

// Droppable
export const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 2rem 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  .deletBoard {
    display: none;
  }
  &:hover {
    .deletBoard {
      display: block;
    }
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  .deletBoard {
    cursor: pointer;
    font-size: 1.25rem;
  }
`;

export const BoardTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const TodoForm = styled.form`
  margin: 1em 0;
  position: relative;
  input {
    padding: 1rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.cardColor};
    color: ${(props) => props.theme.fontColor};
  }
`;

export const AddTaskBtn = styled.button`
  position: absolute;
  top: 0;
  right: 1rem;
  height: 100%;
  font-size: 1.25rem;
  border: none;
  background-color: transparent;
  color: royalblue;
`;

// 드래그 요소 전체 영역
export const DragArea = styled.div<{
  $isDraggingOver: boolean;
  $DraggingFromThisWith: boolean;
}>`
  // 리스트 드롭 시 해당 드롭 영역 색상 변경
  background-color: ${(props) =>
    props.$isDraggingOver ? "royalblue" : "transparent"};
  border-radius: 1rem;
  padding: 1rem;
  flex-grow: 1;
`;

// Draggable
export const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
`;

export const ToDoSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .editBtn {
    display: none;
  }
  &:hover {
    .editBtn {
      display: block;
    }
  }
`;

export const EditForm = styled.form<{ $isEdit: boolean }>`
  display: flex;
  justifyContent: space-between;
  alignItems: center;
  input {
    position: relative;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
    font-size: 0.8rem;
  }
  button {
    position: absolute;
    top: 0;
    right: 2rem;
    height: 100%;
    display: ${(props) => (props.$isEdit ? "block" : "none")};
  }
}
`;

export const ConFirmEditBtn = styled.button<{ $isEdit: boolean }>`
  border: none;
  background-color: transparent;
`;

export const EditBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.fontColor};
  .editIcon {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const CancelBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.fontColor};
  .cancelIcon {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const ConfirmBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.fontColor};
  .confirmIcon {
    font-size: 1.25rem;
    cursor: pointer;
    top: 0;
    right: 0;
  }
`;
