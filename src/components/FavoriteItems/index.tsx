import React from "react";
import { IFavoriteItemsProps } from "./interface";
import DraggableItem from "components/DraggableItem";
import styles from "./favoriteItems.module.scss";

const FavoriteItems: React.FC<IFavoriteItemsProps> = ({
  listItems,
  favoriteItems,
  moveItem
}) => {
  return (
    <>
      {favoriteItems.length ? (
        <div className={styles.list} data-testid="favoriteItemsList">
          {favoriteItems.map((id: number, index: number) => (
            <DraggableItem
              key={id}
              item={listItems[id]}
              index={index}
              moveItem={moveItem}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FavoriteItems;
