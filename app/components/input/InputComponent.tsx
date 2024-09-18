"use client";
import React, { useState } from "react";
import Input from "./Input";
import styles from "./input.module.css";
import Button from "../button/Button";

export default function InputComponent({
  name,
  status,
  progress,
  launch,
  onClose,
}: any) {
  return (
    <div>
      <div className={styles.inputComponent_div}>
        <Input
          placeholder="Section Name"
          type="text"
          value={name}
          label="section"
        />
        <Input
          placeholder="Status"
          type="text"
          value={status}
          label=" status"
        />
        <Input
          placeholder="Progress"
          type="text"
          value={progress}
          label="progres"
        />
        <Input placeholder="Launch" type="text" value={launch} label="launch" />
      </div>
      <div className="flex justify-end ">
        <Button onClose={onClose} />
      </div>
    </div>
  );
}
