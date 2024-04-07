"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoLightBulb } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";



export function Header({
  className,
}: {
  className?: string;
}) {

  return (
    <header className="absolute top-4 animate-fade-down animate-once animate-delay-100 animate-ease-in animate-alternate">
      <nav className="rounded-xl border-2">
        <ul className="flex gap-8 px-8 py-4">
          <Link href={"/"}><IoHomeOutline className="text-white  text-2xl" /><div className="bg-gradient-to-br from-white via-[#00bfd8] to-[#0083f5] h-[2px] w-0 group-hover:w-full transition-all duration-300"></div></Link>
          <Link href={"/about"}><RiUserLine className="text-white   text-2xl" /></Link>
          <Link href={"/skills"}><GoLightBulb className="text-white  text-2xl  " /></Link>
          <Link href={"/works"}><GrProjects className="text-white text-2xl " /></Link>
          <Link href={"/contact"}><BsTelephone className="text-white   text-2xl " /></Link>
        </ul>
      </nav>
    </header >
  );
}
