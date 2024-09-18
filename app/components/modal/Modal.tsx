import React, { useState } from "react";
import styles from "./Modal.module.css";
import InputComponent from "../input/InputComponent";
import Input from "../input/Input";
import { tableState } from "@/app/store/Table.store";
import { Column } from "@/app/interfaces/Table.interface";

export default function Modal({ isOpen, tableColumns }: any) {
  const [data, setData] = useState({});
  return (
    <div>
      {isOpen && (
        <div className={styles.modulComponent}>
          <div className="bg-white rounded-lg overflow-hidden p-[16px] ">
            <InputComponent />
            {tableState.columns.map((column: Column) => (
              <Input
                placeholder={column.dataIndex}
                type="text"
                
                label={column.dataIndex}
                change={(e) =>
                  setData({ ...data, [column.dataIndex]: e.target.value })
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
