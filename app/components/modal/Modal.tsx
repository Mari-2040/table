import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import Input from "../input/Input";
import { tableState } from "@/app/store/Table.store";
import { Column, DataSource } from "@/app/interfaces/Table.interface";
import Button from "../button/Button";
import { useSnapshot } from "valtio";
import { modalState } from "@/app/store/Modal.store";
import { v4 as uuidv4 } from "uuid";

export default function Modal({ isOpen }: any) {
  const [data, setData] = useState<DataSource>({});
  const tableSnap = useSnapshot(tableState);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      {isOpen && (
        <div className={styles.modulComponent}>
          <div className="bg-white rounded-lg overflow-hidden p-[16px] ">
            <div className={styles.inputComponent_div}>
              {tableSnap.columns.map((column: Column) => (
                <Input
                  placeholder={column.dataIndex}
                  type="text"
                  label={column.dataIndex}
                  value={data[column.dataIndex as keyof DataSource]}
                  change={(e) =>
                    setData({ ...data, [column.dataIndex]: e.target.value })
                  }
                />
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => (modalState.isOpen = false)}
                label="დახურვა"
              />
              <Button
                onClick={() => {
                  modalState.isOpen = false;
                  tableState.dataSource = [
                    ...tableSnap.dataSource,
                    { ...data, id: uuidv4() },
                  ];
                  setData({});
                }}
                label="დამატება"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
