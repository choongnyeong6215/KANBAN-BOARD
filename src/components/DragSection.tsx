import { Draggable } from "react-beautiful-dnd";
import { Card } from "../styles/dndStyle";
import { ICardProps } from "../interfaces/cardInterface";
import React from "react";

const DragSection = ({ todoId, todoText, idx }: ICardProps) => {
  return (
    <Draggable key={todoId} draggableId={String(todoId)} index={idx}>
      {(provided, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
};

// 리렌더링 최적화
export default React.memo(DragSection);
