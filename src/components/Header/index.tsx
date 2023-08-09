import React from "react";
import { IHeaderProps } from "./interface";
import Button from "components/Button";
import Title from "components/Title";
import styles from "./header.module.scss";

const Header: React.FC<IHeaderProps> = ({ buttonTitle, title, to }) => {
  return (
    <header className={styles.header}>
      <Title title={title} />
      <Button to={to} title={buttonTitle} />
    </header>
  );
};

export default Header;
