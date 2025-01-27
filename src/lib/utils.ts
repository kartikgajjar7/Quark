import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const sidebar_newdoc_click = async () => {
  console.log("new doc clicked");
};

export { sidebar_newdoc_click };
