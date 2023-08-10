import React from "react";
import ListItem from "components/ListItem";
import { IListProps } from "./interface";
import styles from "./list.module.scss";

const List: React.FC<IListProps> = ({
  listItems,
  isLoading,
  isError,
  toggleFavorite,
  forwardedRef
}) => {
  return (
    <div
      className={styles.list}
      ref={forwardedRef}
      data-testid="list-container"
    >
      {Object.values(listItems).map((item) => (
        <ListItem key={item.id} item={item} toggleFavorite={toggleFavorite} />
      ))}
      {isLoading && <p className={styles.text}>Загрузка...</p>}
      {isError && (
        <p className={styles.text}>
          Упс! Что-то пошло не так. Пожалуйста, обновите страницу.
        </p>
      )}
    </div>
  );
};

export default List;
