"use client";
import Modal from "./components/modal/Modal";
import { modalState } from "./store/Modal.store";
import { useSnapshot } from "valtio";
import { tableState } from "./store/Table.store";
import Table from "./components/table/Table";
import TableOps from "./components/table/TableOps";
import styles from "./components/table/Table.module.css";

export default function Home() {
  const modalSnap = useSnapshot(modalState);
  const TableSnap = useSnapshot(tableState);
  return (
    <div className={styles.div_components}>
      <Modal isOpen={modalSnap.isOpen} />
      <TableOps />
      <Table dataSource={tableState.dataSource} columns={tableState.columns} />
    </div>
  );
}
