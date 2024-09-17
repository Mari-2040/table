"use client";
import React, { useState } from "react";
import styles from "./input.module.css";

type inputType = "text" | "number" | "date" | "password";
interface InputComponentProps {
  initialData?: string;
  type?: inputType;
  placeholder?: string;
  value?: string;
  change?: (e: any) => void;
  label?: string;
}

export default function Input(props: InputComponentProps) {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="flex flex-col gap-1">
        <span className={styles.spanStyle}>{props.label}</span>
        <input
          className={styles.inputStyle}
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
