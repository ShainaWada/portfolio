'use client';
import './globals.css';
import 'animate.css';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Image from 'next/legacy/image';
import icon from '/public/icon.png';
import css3d from './images/css3d.png';
import html3d from './images/html3d.png';
import javascript3d from './images/javascript3d.png';
import react3d from './images/react3d.png';
import github3d from './images/github3d.png';
import figma from './images/figma.png';
import { useState } from 'react';
import { ProjectsData } from './components/ProjectsData';
import Link from 'next/link';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <div className="bg-white ">
      <main className={`${darkMode ? 'dark' : ''} overflow-y-hidden`}>
        <header className="fixed top-0 left-0 z-10 w-full">
          <nav className="flex justify-between py-10 px-14">
            <h1 className="text-xl font-black font-body dark:text-white">
              PORTFOLIO
            </h1>
            <ul className="flex items-center">
              <li>
                {!darkMode ? (
                  <BsFillMoonStarsFill
                    className="text-2xl cursor-pointer text-neutral-800"
                    onClick={() => handleClick()}
                  />
                ) : (
                  <BsFillSunFill
                    className="text-2xl cursor-pointer dark:text-white"
                    onClick={() => handleClick()}
                  />
                )}
              </li>
            </ul>
          </nav>
        </header>
        <section className="flex items-center justify-center min-h-screen dark:bg-neutral-800">
          <div className="items-center justify-center lg:flex lg:justify-around">
            <div className="p-10 text-center font-body lg:flex">
              <div>
                <h2 className="py-2 text-5xl font-medium animate__animated animate__wobble text-rose-500">
                  Welcome
                </h2>
                {/* <h3 className="py-2 text-2xl dark:text-white">
                  Web Developer & Designer
                </h3>
                <p className="max-w-xl py-5 mx-auto leading-7 text-gray-700 text-md dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  impedit recusandae quo laboriosam autem, repellendus expedita
                  quam.
                </p>
                <div className="flex justify-center gap-16 my-4 text-5xl text-gray-700">
                  <AiFillGithub className="dark:text-white active:" />
                </div> */}
              </div>
            </div>
            <div className="relative mx-auto overflow-hidden rounded-full bg-gradient-to-b from-rose-300 w-60 h-60 mt-14">
              <Image src={icon} alt="icon" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center min-h-screen dark:bg-neutral-800">
          <div className="flex items-center justify-center">
            <h1 className="my-8 text-4xl font-body dark:text-white">Skills</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 p-6 lg:w-5/6 lg:gap-32 md:gap-20 hover:shadow-gray-200">
            <div className="transition shadow-2xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110">
              <Image src={html3d} width={200} height={200} alt="img" />
            </div>
            <div className="transition shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110">
              <Image src={css3d} width={200} height={200} alt="img" />
            </div>
            <div className="transition shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110">
              <Image src={javascript3d} width={200} height={200} alt="img" />
            </div>
            <div className="transition shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110">
              <Image src={react3d} width={200} height={200} alt="img" />
            </div>
            <div className="transition shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110">
              <Image src={github3d} width={200} height={200} alt="img" />
            </div>
            <div className="transition shadow-xl rounded-3xl w-fit hover:shadow-gray-200 hover:scale-110">
              <Image src={figma} width={200} height={200} alt="img" />
            </div>
          </div>
        </section>
        <section className="flex flex-col py-3 text-center dark:bg-neutral-800">
          <h1 className="my-8 text-4xl font-body dark:text-white">Projects</h1>
          <div className="mx-36 [&>div]:border-4 [&>div]:my-8 [&>div]:rounded-lg ">

            {ProjectsData.map((value, key) => {
              return (
                <Link href={value.link}
                  key={key}>

                  <a className="flex flex-col items-center p-3 text-center border-4">
                    <h2 className="my-2 text-4xl dark:text-white font-head">
                      {value.title}
                    </h2>
                    <Image
                      className="rounded-lg "
                      src={value.image}
                      alt={value.title}
                    />
                    <div className="flex gap-4">
                      <a
                        className="my-2 text-4xl transition dark:text-white hover:scale-95"
                        href={value.source}
                      >
                        {value.github}
                      </a>
                    </div>
                  </a>

                </Link>
              );
            })}

          </div>
        </section >

      </main >
    </div >
  );
}
