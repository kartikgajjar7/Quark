import { auth } from "@/auth";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import { json } from "stream/consumers";

export default async function Home() {
  return (
    <main className=" border p-0 h-screen w-screen ">
      <Navbar />
      <div className="w-full h-full relative flex justify-center ">
        <Hero />
      </div>
    </main>
  );
}
