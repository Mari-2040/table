import React from "react";
import styles from "./Button.module.css";

export default function Button({ handleAddReport, onClose }: any) {
  return (
    <button className={styles.button} onClick={onClose}>
      Add Report
    </button>
  );
}
console.log({ onclose }, "mari");
