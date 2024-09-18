import React from "react";
import styles from "../header/Header.module.css";
import { modalState } from "@/app/store/Modal.store";

export default function TableHeader() {
  return (
    <div className="flex items-baseline">
      <button
        onClick={() => (modalState.isOpen = true)}
        className={styles.openModal}>
        add Table
      </button>
    </div>
  );
}
