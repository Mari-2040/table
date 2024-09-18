"use client";
import React from "react";
import InputComponent from "../input/InputComponent";
import styles from "./Header.module.css";
import Table from "../table/Table";
import TableHeader from "../table/TableHeader";

export default function Header({ reportData }: any) {
  return (
    <div className={styles.mari}>
      <InputComponent />
      <TableHeader />
      <Table reportData={reportData} />
    </div>
  );
}
