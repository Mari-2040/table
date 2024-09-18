import React from "react";
import styles from "./Button.module.css";
import { modalState } from "@/app/store/Modal.store";

export default function Button() {
  return (
    <button className={styles.button} onClick={()=> modalState.isOpen = false}>
      Add Report
    </button>
  );
}
