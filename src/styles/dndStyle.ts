import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin: 0 auto;
  height: 100vh;
`;

export const BoardGroup = styled.div`
  display: grid;
  grid-repeat-columns: repeat(3, 1fr);
  width: 100%;
`;

// Droppable
export const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 2rem 2rem;
  padding-top: 2rem;
  border-radius: 1rem;
`;

// Draggable
export const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
`;