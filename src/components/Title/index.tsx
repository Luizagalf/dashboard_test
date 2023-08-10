import React from "react";
import { ITitle } from "./interface";
import styles from "./title.module.scss";

const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <h1 className={styles.title} data-testid="title-component">
      {title}
    </h1>
  );
};

export default Title;
