import React from "react";
interface BlockProps {
  color: string;
}
export default function Block({ color }: BlockProps) {
  return (
    <div
      className={`bg-[rgb(245_245_245/var(--tw-bg-opacity))] border ${
        color === "white"
          ? "bg-white border-none"
          : "bg-opacity-100 hover:bg-[#FCFCED] bg-[#010f0c] transition-colors duration-500 ease-in-out  border-mineshaft-200"
      }  w-[7%] h-[30px] lg:w-[7.5%] lg:h-full`}
    ></div>
  );
}
