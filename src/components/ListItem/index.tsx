import React from "react";
import { IListItemProps } from "./interface";
import styles from "./listItem.module.scss";

const ListItem: React.FC<IListItemProps> = ({ item, toggleFavorite }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row1}>
        <h5 className={styles.title}>{item.id}</h5>
        {toggleFavorite && (
          <button
            onClick={() => toggleFavorite(item.id)}
            className={`${styles.button} ${
              item.isFavorite ? styles.button__isFavorite : ""
            }`}
          >
            {item.isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
          </button>
        )}
      </div>
      <div className={styles.row2}>
        <img src={item.thumbnailUrl} alt={item.title} />
        <p className={styles.text}>{item.title}</p>{" "}
      </div>
    </div>
  );
};

export default ListItem;
