'use client';
import './globals.css';
import 'animate.css';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Image from 'next/image';
import icon from '/public/icon.png';
import css3d from './images/css3d.png';
import html3d from './images/html3d.png';
import javascript3d from './images/javascript3d.png';
import react3d from './images/react3d.png';
import github3d from './images/github3d.png';
import figma from './images/figma.png';
import { useState } from 'react';
import { ProjectsData } from './components/ProjectsData';
import { ExperienceData } from "./components/Experience";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white ">
      <main className={`${darkMode ? 'dark' : ''} overflow-y-hidden`}>
        <header className="fixed top-0 left-0 z-10 w-full ">
          <nav className="flex justify-between py-10 px-14">
            <h1 className="text-xl font-black font-body dark:text-white">
              PORTFOLIO
            </h1>
            <ul className="flex items-center gap-6 [&>a]:font-bold font-body dark:text-white">
              <a href="#Skills" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:after:bg-white">
                <li>Skills</li>
              </a>
              <a href="#Projects" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:after:bg-white">
                <li>Project</li>
              </a>
              <a href="#Experience" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:after:bg-white">
                <li>Experience</li>
              </a>
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
                  Welcome!
                </h2>
              </div>
            </div>
            <div className="relative mx-auto overflow-hidden rounded-full bg-gradient-to-b from-rose-300 w-60 h-60 mt-14">
              <Image src={icon} alt="icon" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section id='Skills' className="flex flex-col items-center min-h-screen dark:bg-neutral-800">
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
        <section id='Projects' className="flex flex-col items-center gap-3 py-3 text-center dark:bg-neutral-800">
          <h1 className="my-8 text-4xl font-body dark:text-white">Projects</h1>
          <p className='text-left dark:text-white'>※以下は全て個人開発</p>
          {ProjectsData.map((value, key) => {
            return (
              <div className="flex flex-col items-center gap-4 border-4 rounded-2xl hover:opacity-80" key={key}>
                <a href={value.link}
                  className="flex flex-col items-center p-3 text-center ">
                  <h2 className="my-2 text-4xl dark:text-white font-head">
                    {value.title}
                  </h2>
                  <Image
                    className="rounded-lg "
                    src={value.image}
                    alt={value.title}
                    width={800} height={800}
                  />

                </a>
                <a
                  className="mb-3 text-4xl transition dark:text-white hover:scale-95"
                  href={value.source}
                >
                  {value.github}
                </a>
              </div>
            );
          })}
        </section >

        <section id='Experience' className="flex flex-col py-3 text-center dark:bg-neutral-800">
          <h1 className="my-8 text-4xl font-body dark:text-white">Experience</h1>
          <div className="mx-36 [&>div]:my-8 [&>div]:rounded-lg ">
            <p className='dark:text-white'>インターンに参加し、受託開発会社でおよそ半年ほどフロントエンドエンジニアとして働きました。
              業務としては、Next、TypeScript などを利用して、<a href="https://jobns.jp/" className='text-blue-400 underline'>JobNS</a>という求人サイトのページの実装を複数担当致しました。以下は私が担当したページです。</p>
            <div className='grid grid-flow-row-dense grid-cols-2 gap-1 '>
              {ExperienceData.map((image, key) => {
                return (
                  <Image
                    key={key}
                    className="object-cover border rounded-lg"
                    src={image}
                    alt={`${image}の画像`}
                    width={500} height={500}
                  />
                );
              })}
            </div>
          </div>
        </section >

      </main >
    </div >
  );
}
