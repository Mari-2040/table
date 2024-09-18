"use client";
import React from "react";
import styles from "./Modal.module.css";
import InputComponent from "../input/InputComponent";

export default function Modal({ isOpen, onClose }: any) {
  return (
    <div>
      {isOpen && (
        <div className={styles.modulComponent}>
          <div className="bg-white rounded-lg overflow-hidden p-[16px] ">
            <InputComponent onClose={onClose} />
          </div>
        </div>
      )}
    </div>
  );
}
