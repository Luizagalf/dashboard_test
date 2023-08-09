import React from "react";
import { useNavigate } from "react-router-dom";
import { IButtonProps } from "./interface";
import styles from "./button.module.scss";

const Button: React.FC<IButtonProps> = ({ title, to }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className={styles.button}>
      {title}
    </button>
  );
};

export default Button;
