"use client";
import React from "react";
import InputComponent from "../input/InputComponent";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.mari}>
      <InputComponent />
    </div>
  );
}
