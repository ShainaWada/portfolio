'use client';
import './globals.css';
import { motion } from 'framer-motion';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import Image from 'next/legacy/image';
import icon from '/public/icon.png';
import css3d from './images/css3d.png';
import html3d from './images/html3d.png';
import javascript3d from './images/javascript3d.png';
import react3d from './images/react3d.png';
import github3d from './images/github3d.png';
import figma from './images/figma.png';
import web1 from '../app/images/web1.png';
import web2 from '../app/images/web2.png';
import web3 from '../app/images/web3.png';
import { useState } from 'react';
import { navVariants } from '../app/utils/motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white  ">
      <motion.main
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${darkMode ? 'dark' : ''} overflow-y-hidden`}
      >
        <header className="z-10 fixed top-0 left-0 w-full">
          <nav className="py-10 px-14 flex justify-between">
            <h1 className="text-xl font-body font-black dark:text-white">
              PORTFOLIO
            </h1>
            <ul className="flex items-center">
              <li>
                {!darkMode ? (
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-2xl text-neutral-800"
                    onClick={() => handleClick()}
                  />
                ) : (
                  <BsFillSunFill
                    className="cursor-pointer text-2xl dark:text-white"
                    onClick={() => handleClick()}
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-rose-500 to-pink-600 text-white font-body px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="min-h-screen dark:bg-neutral-800 flex justify-center items-center">
          <div className="lg:flex justify-center items-center lg:justify-around">
            <div className="text-center p-10 font-body lg:flex">
              <div>
                <h2 className="text-5xl py-2 text-rose-500 font-medium">
                  Charlotte
                </h2>
                <h3 className="text-2xl py-2 dark:text-white">
                  Web Developer & Designer
                </h3>
                <p className="text-md py-5 leading-7 text-gray-700 dark:text-white max-w-xl mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  impedit recusandae quo laboriosam autem, repellendus expedita
                  quam.
                </p>
                <div className="text-5xl flex justify-center gap-16 text-gray-700 my-4">
                  <AiFillGithub className="dark:text-white active:" />
                  <AiFillInstagram className="dark:text-white" />
                  <AiFillTwitterCircle className="dark:text-white" />
                </div>
              </div>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-rose-300 rounded-full w-60 h-60 mt-14 overflow-hidden">
              <Image src={icon} alt="icon" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="min-h-screen flex flex-col items-center dark:bg-neutral-800">
          <div className="flex justify-center items-center">
            <h1 className="font-body text-4xl my-8 dark:text-white">Skills</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 p-6 lg:w-5/6 lg:gap-32 md:gap-20 hover:shadow-gray-200">
            <div className="shadow-2xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110 transition">
              <Image src={html3d} width={200} height={200} alt="img" />
            </div>
            <div className="shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110 transition">
              <Image src={css3d} width={200} height={200} alt="img" />
            </div>
            <div className="shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110 transition">
              <Image src={javascript3d} width={200} height={200} alt="img" />
            </div>
            <div className="shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110 transition">
              <Image src={react3d} width={200} height={200} alt="img" />
            </div>
            <div className="shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110 transition">
              <Image src={github3d} width={200} height={200} alt="img" />
            </div>
            <div className="shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110 transition">
              <Image src={figma} width={200} height={200} alt="img" />
            </div>
          </div>
        </section>
        <section className="py-3 dark:bg-neutral-800 flex flex-col text-center">
          <h1 className="font-body text-4xl dark:text-white my-8">Works</h1>
          <div className="mx-36 [&>div]:border-4 [&>div]:my-8 [&>div]:rounded-lg ">
            <div className="p-3 border-4">
              <Image className="rounded-lg " src={web1} alt="web1" />
            </div>
            <div className="p-3">
              <Image className="rounded-lg " src={web2} alt="web2" />
            </div>
            <div className="p-3">
              <Image className="rounded-lg " src={web3} alt="web3" />
            </div>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
