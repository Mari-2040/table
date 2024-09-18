"use client";
import React from "react";

interface ReportData {
  name: string;
  status: string;
  progress: string;
  launch: string;
}

interface TableProps {
  reportData: ReportData[];
}

export default function Table({ reportData }: TableProps) {
  const data = reportData || [];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border w-[93%] mt-6 mb-10">
      <table className="w-full">
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap border-r text-[#000000] border-gray-300 hover:cursor-pointer">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-l border-r text-[#6A6A6A] text-sm border-gray-300 hover:cursor-pointer">
                  {item.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-l border-r text-[#6A6A6A] text-sm border-gray-300 hover:cursor-pointer">
                  {item.progress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-l border-r text-[#0F66CC] text-sm border-gray-300 hover:cursor-pointer">
                  {item.launch}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-center" colSpan={4}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
