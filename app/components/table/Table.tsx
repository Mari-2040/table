"use client";
import React from "react";

export default function Table({ reportData }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border w-[93%] mt-6 mb-10">
      <table className="w-full">
        <tbody className="bg-white divide-y divide-gray-200">
          {reportData.map((item: any, index: any) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap border-r-1 text-[#000000] border-gray-300 hover:cursor-pointer">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-l-2 text-[#6A6A6A] border-r-1 text-sm border-gray-300 hover:cursor-pointer">
                {item.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-l-2 text-[#6A6A6A] border-r-1 text-sm border-gray-300 hover:cursor-pointer">
                {item.progress}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-l-2 border-r-1 text-[#0F66CC] text-sm border-gray-300 hover:cursor-pointer">
                {item.launch}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
