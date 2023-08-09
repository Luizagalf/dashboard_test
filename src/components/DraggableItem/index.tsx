import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IListItem } from "interfaces/ListItem";
import ListItem from "components/ListItem";

interface DraggableItemProps {
  item: IListItem;
  index: number;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: "none",
            padding: 16,
            margin: "0 0 8px 0",
            backgroundColor: "lightgray",
            ...provided.draggableProps.style
          }}
        >
          <ListItem key={item.id} item={item} />
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
