import React, { useState } from "react";
import { IDraggableItemProps } from "./interface";
import ListItem from "components/ListItem";
import styles from "./draggableItem.module.scss";

const DraggableItem: React.FC<IDraggableItemProps> = ({
  item,
  index,
  moveItem
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer!.setData("text/plain", index.toString());
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer!.getData("text/plain"));
    moveItem(sourceIndex, index);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`${styles.element} ${isDragging ? styles.dragging : ""}`}
    >
      <ListItem key={item.id} item={item} />
    </div>
  );
};

export default DraggableItem;
