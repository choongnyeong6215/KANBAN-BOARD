import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  height: 100vh;
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
  padding: 2rem 2rem;
  padding-top: 2rem;
  border-radius: 1rem;
`;

// Draggable
export const Card = styled.div<{ $isDragging: boolean }>`
  // 드래그 요소 색상 강조 처리
  background-color: ${(props) =>
    props.$isDragging ? props.theme.bgColor : props.theme.cardColor};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
  flex-grow: 1;
`;

export const BoardTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  padding-bottom: 1rem;
`;

// 드래그 요소 전체 영역
export const DragArea = styled.div<{ $isDraggingOver: boolean }>`
  // 리스트 드롭 시 해당 드롭 영역 색상 변경 처리
  background-color: ${(props) =>
    props.$isDraggingOver ? "#EEE3CB" : "#F5EEE6"};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
`;
