import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 2rem auto;
`;

export const BoardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 2rem;
`;

// Droppable
export const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 2rem 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

// Draggable
export const Card = styled.div<{ $isDragging: boolean }>`
  // 드래그 요소 색상 강조 처리
  background-color: ${(props) => props.theme.cardColor};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  aligin-items: center;
  .deletBoard {
    cursor: pointer;
  }
`;

export const BoardTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  padding-bottom: 1rem;
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

export const TodoForm = styled.form`
  margin: 1em 0;
  position: relative;
  input {
    padding: 1rem 1rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.cardColor};
    color: ${(props) => props.theme.fontColor};
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 0.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: black;
    font-weight: bold;
  }
`;

export const TrashCan = styled.div<{ $isDraggingOver: boolean }>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 3rem;
  padding: 1rem;
  background-color: ${(props) =>
    props.$isDraggingOver ? "tomato" : "transparent"};
  width: 5rem;
  border-radius: 2.5rem;
  .logo {
    color: ${(props) => props.theme.iconColor};
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

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

export const AddTaskBtn = styled.button`
  .btnIcon {
    position: absolute;
    top: 0;
    right: 0.5rem;
    height: 100%;
    font-size: 1.5rem;
    color: royalblue;
  }
`;
