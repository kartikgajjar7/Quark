import React from "react";
import Block from "./Block";
export default function Rows({
  number_off_white,
}: {
  number_off_white: number;
}) {
  const blocks = [];
  for (let i = 1; i <= 13; i++) {
    if (i >= 7 - number_off_white + 2 && i <= 7 + number_off_white - 2) {
      blocks.push(<Block key={i} color="white" />);
      continue;
    }
    blocks.push(<Block key={i} color="normal" />);
  }
  return (
    <div className=" realtive  pt-[5px] flex flex-row items-center justify-between w-full lg:h-[13%] max-w-9xl">
      {blocks}
    </div>
  );
}
