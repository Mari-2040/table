import React from "react";

export default function TableHeader() {
  return (
    <div className="flex mt-8 gap-20 ml-3 cursor-pointer">
      <div className="text-sm font-bold text-[#101011]"> SECTION </div>
      <div className="text-sm font-bold pl-4"> STATUS </div>
      <div className="text-sm font-bold"> PROGRES </div>
      <div className="mr-24 text-sm font-bold"> ACTION </div>
    </div>
  );
}
