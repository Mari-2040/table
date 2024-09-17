"use client";
import React from "react";
import Input from "./Input";
import styles from "./input.module.css";

export default function InputComponent() {
  return (
    <div>
      <div className={styles.inputComponent_div}>
        <Input placeholder="Section Name" type="text" />
        <Input placeholder="Status" type="text" />
        <Input placeholder="Progress" type="text" />
        <Input placeholder="Launch" type="text" />
      </div>
      <button className={styles.button}>Add Report</button>
    </div>
  );
}
