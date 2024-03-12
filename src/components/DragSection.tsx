import { Draggable } from "react-beautiful-dnd";
import { Card } from "../styles/dndStyle";
import { ICardProps } from "../interfaces/cardInterface";

const DragSection = ({ v, idx }: ICardProps) => {
  return (
    <Draggable draggableId={v} index={idx}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {v}
        </Card>
      )}
    </Draggable>
  );
};

export default DragSection;
