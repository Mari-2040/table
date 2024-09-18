"use client";
// import React from "react";

// export default function Table({ reportData }: any) {
//   const data = reportData || [];

//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden border w-[93%] mt-6 mb-10">
//       <table className="w-full">
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="px-6 py-4 whitespace-nowrap border-r text-[#000000] border-gray-300 hover:cursor-pointer">
//                 {item.name}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap border-l border-r text-[#6A6A6A] text-sm border-gray-300 hover:cursor-pointer">
//                 {item.status}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap border-l border-r text-[#6A6A6A] text-sm border-gray-300 hover:cursor-pointer">
//                 {item.progress}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap border-l border-r text-[#0F66CC] text-sm border-gray-300 hover:cursor-pointer">
//                 {item.launch}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
import { TableProps } from "@app/interfaces/Table.interface";

const Table: React.FC<TableProps> = ({ dataSource, columns }) => {
  return (
    <div className="overflow-x-auto">
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
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataSource.map((item) => (
            <tr key={item.key}>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {item[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
