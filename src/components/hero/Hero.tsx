import path from "path";
import Block from "./block";
import Rows from "./Rows";
import BlurIn from "@/components/magicui/blur-in";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Weight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
export default function hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full  md:w-4/5 lg:h-full max-w-9xl ">
      <div className="relative flex flex-col  w-full h-full ">
        <Rows number_off_white={Number("3")} />
        <Rows number_off_white={Number("5")} />
        <Rows number_off_white={Number("6")} />
        <Rows number_off_white={Number("6")} />
        <Rows number_off_white={Number("5")} />
        <Rows number_off_white={Number("4")} />
        <Rows number_off_white={Number("3")} />
      </div>
      <div className="z-[999] flex text-center flex-col top-[10px] items-center  lg:top-[200px] absolute w-[60%] lg:w-[40%] lg:h-[50%]">
        <h1 className=" lg:text-5xl text-xs text-center font-semibold font-apercu ">
          Unlock the Power of Collaborative Learning with{" "}
          <span className="relative">
            <Cover>✨Quark</Cover>
          </span>
        </h1>
        <h1 className="font-apercu mt-4  text-sm lg:text-2xl lg:leading-6">
          Simplify content creation—write, edit, and share with ease
        </h1>
        <h1 className="font-apercu text-2xl">
          From drafting to sharing—Quark makes it all easier
        </h1>
        <div className="mt-7">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
          >
            <h1 className="text-xl">Dive Into Quark</h1>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
