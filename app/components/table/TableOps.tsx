import React from "react";
import styles from "../table/Table.module.css";
import { modalState } from "@/app/store/Modal.store";
import { filterState } from "@app/store/Filter.store";

export default function TableOps() {
  return (
    <div className="flex items-baseline pb-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => (modalState.isOpen = true)}
          className={styles.openModal}>
          add Table
        </button>
        <div className="flex items-center border rounded-lg px-2 py-1">
          <input
            type="text"
            placeholder="Filter..."
            className="outline-none "
            onChange={(e) => (filterState.filter = e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V18a1 1 0 001 1h2a1 1 0 001-1v-3.172a1 1 0 00-.293-.707L9.707 6.707A1 1 0 009 6V4H5a1 1 0 00-1 1v2a1 1 0 00.293.707L10 12.414V18a1 1 0 001 1h2a1 1 0 001-1v-3.172a1 1 0 00-.293-.707L4.293 6.707A1 1 0 004 6V4H3z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
