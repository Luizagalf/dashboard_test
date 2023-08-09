import React from "react";
import { IStatisticsProps } from "./interface";
import styles from "./statistics.module.scss";

const Statistics: React.FC<IStatisticsProps> = ({
  favoriteItemsCount,
  totalFileSize
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Количество элементов в избранном: {favoriteItemsCount}
      </p>
      <p className={styles.text}>
        Вес картинок всех элементов в избранном: {totalFileSize} MB
      </p>
    </div>
  );
};

export default Statistics;
