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
  onClose?: () => void;
}

export default function Input(props: InputComponentProps) {
  const [inputValue, setInputValue] = useState(props.initialData || "");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    if (props.change) {
      props.change(e);
    }
  };

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState("");
  const [launch, setLaunch] = useState("");
  const [reportData, setReportData] = useState([
    {
      name: "Info",
      status: "Not Started",
      progress: "Question 3/6",
      launch: "Launch",
    },
  ]);

  const handleAddReport = () => {
    if (!name || !status || !progress || !launch) {
      alert("შეავსეთ ყველა ველი");
      return;
    }

    const newReport = {
      name: name,
      status: status,
      progress: progress,
      launch: launch,
    };

    setReportData([...reportData, newReport]);
    setName("");
    setStatus("");
    setProgress("");
    setLaunch("");
  };

  return (
    <div>
      <div className="flex flex-col gap-1">
        <span className={styles.spanStyle}>{props.label}</span>
        <input
          className={styles.inputStyle}
          type={props.type || "text"}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
