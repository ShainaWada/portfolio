import React from "react";
import Image from "next/image";
import img from "../../public/main-img.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex flex-col justify-center w-full gap-12 sm:flex-row sm:items-center sm:justify-around">
      <div className="flex flex-col items-center sm:items-start mt-3">
        <h1 className="animate-fade-right animate-delay-[700ms] animate-ease-out font-bold text-4xl text-white md:text-6xl">I&apos;m Shaina.</h1>
        <h2 className="animate-fade-right animate-delay-[900ms] animate-ease-out text-[#222A59] sm:text-yellow-400 md:text-xl">Frontend Developer/Designer</h2>
        <Link href={"/contact"} className="animate-fade-right animate-delay-[1000ms] flex mt-6 py-1.5 px-3 rounded text-white font-light text-sm items-center gap-2
                            before:ease relative h-10 w-24 overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400  shadow-2xl transition-all
                            before:absolute before:right-0 before:top-0 before:h-12 before:w-6
                            before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10
                            before:duration-700  hover:before:-translate-x-40">
          Contact <i><FaArrowRight /></i>
        </Link>
      </div>

      <Image src={img} alt="" priority={true} className="animate-fade-left animate-once animate-delay-[800ms] animate-ease-out object-contain self-center aspect-square w-72 md:w-80" />

    </div >
  );
}
