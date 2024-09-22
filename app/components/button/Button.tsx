import React from "react";
import styles from "./Button.module.css";

export default function Button({onClick, label} :any) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
