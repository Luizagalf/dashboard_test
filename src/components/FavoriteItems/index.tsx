import React from "react";
import { IListItems } from "interfaces/ListItems";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableItem from "components/DraggableItem";

interface FavoriteItemsProps {
  listItems: IListItems;
  favoriteItems: number[];
  onDragEnd: (result: any) => void;
}

const FavoriteItems: React.FC<FavoriteItemsProps> = ({
  listItems,
  favoriteItems,
  onDragEnd
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {favoriteItems.map((id: number, index: number) => (
              <DraggableItem key={id} item={listItems[id]} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default FavoriteItems;
