"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Table from "../table/Table";
import TableHeader from "../table/TableHeader";
import InputComponent from "../input/InputComponent";

export default function Header() {
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
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      phone: "234234",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      phone: "4564564",
    },

  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
  ];
  return (
    <div className={styles.div_components}>
      <TableHeader />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
