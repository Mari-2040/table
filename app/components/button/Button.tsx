import React from "react";
import styles from "./Button.module.css";

export default function Button({ handleAddReport, onclose }: any) {
  return (
    <button
      className={styles.button}
      onChange={handleAddReport}
      onClick={onclose}>
      Add Report
    </button>
  );
}
