import { proxy, subscribe } from "valtio";

import { TableState } from "@/app/interfaces/Table.interface";

const savedState = JSON.parse(localStorage.getItem("appState") || "{}");

export const tableState = proxy<TableState>({
  dataSource: [
    {
      key: "1",
      name: "Mike",
      age: "32",
      address: "10 Downing Street",
      phone: "234234",
      company: "D.J",
    },
    {
      key: "2",
      name: "John",
      age: "42",
      address: "10 Downing Street",
      phone: "4564564",
      company: "D.J",
    },
  ],
  columns: [
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
    {
      title: "company",
      dataIndex: "company",
      key: "company",
    },
  ],
  ...savedState,
});

// Subscribe to changes and save to localStorage
subscribe(tableState, () => {
  localStorage.setItem("appState", JSON.stringify(tableState));
});
