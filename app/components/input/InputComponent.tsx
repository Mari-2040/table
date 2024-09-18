"use client";
import React, { useState } from "react";
import Input from "./Input";
import styles from "./input.module.css";
import Button from "../button/Button";

export default function InputComponent({ name, status, progress, launch, onclose }: any) {
  return (
    <div>
      <div className={styles.inputComponent_div}>
        <Input placeholder="Section Name" type="text" value={name} />
        <Input placeholder="Status" type="text" value={status} />
        <Input placeholder="Progress" type="text" value={progress} />
        <Input placeholder="Launch" type="text" value={launch} />
      </div>
      <Button onClose={onclose} />
    </div>
  );
}
