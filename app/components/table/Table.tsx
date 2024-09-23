"use client";
import React, { useState } from "react";
import { TableProps } from "@app/interfaces/Table.interface";
import { filterState } from "@app/store/Filter.store";
import { useSnapshot } from "valtio";
import Button from "../button/Button";

const Table: React.FC<TableProps> = ({ dataSource, columns, onDelete }) => {
  const filterSnap = useSnapshot(filterState);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);

  const filteredData = dataSource.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filterSnap.filter.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200 table-auto">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {column.title}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                    {item[column.dataIndex]}
                  </td>
                ))}
                <td>
                  <Button label="წაშლა" onClick={() => onDelete(item.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center py-4">
        <button
          className={`px-4 py-2 ${currentPage === 1 ? "opacity-50" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 ${
            currentPage === totalPages ? "opacity-50" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
