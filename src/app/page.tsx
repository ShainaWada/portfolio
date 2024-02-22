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
import { ExperienceData } from "./components/Experience";
import { SparklesPreview } from './components/SparklesPreview';
import { AnimatedPin } from './components/Animated-pin'


export default function Home() {


  return (

    <main className="text-white bg-black ">
      <header className="fixed top-0 left-0 z-10 w-full align-middle">
        <nav className="flex justify-between py-10 px-14">
          <h1 className="text-xl font-bold text-white font-body dark:text-white">
            PORTFOLIO
          </h1>
          <ul className="flex items-center gap-6 px-8 py-2 rounded-full font-body bg-opacity-20 bg-slate-400 dark:text-white">
            <a href="#Skills" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:after:bg-white">
              <li>Skills</li>
            </a>
            <a href="#Projects" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:after:bg-white">
              <li>Project</li>
            </a>
            <a href="#Experience" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:after:bg-white">
              <li>Experience</li>
            </a>
          </ul>
        </nav>
      </header>
      <SparklesPreview />
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
        <AnimatedPin />
      </section >

      <section id='Experience' className="flex flex-col py-3 text-center dark:bg-neutral-800">
        <h1 className="my-8 text-4xl font-body dark:text-white">Experience</h1>
        <div className="mx-28 [&>div]:my-8 [&>div]:rounded-lg ">
          <p className=' sm:text-sm md:text-md lg:text-lg dark:text-white'>インターンに参加し、受託開発会社でおよそ半年ほどフロントエンドエンジニアとして働きました。
            業務としては、Next、TypeScript などを利用して、<a href="https://jobns.jp/" className='text-blue-400 underline'>JobNS</a>という求人サイトのページの実装を複数担当致しました。以下は私が担当したページです。</p>
          <div className='grid grid-flow-row-dense grid-cols-2 gap-1 place-items-center'>
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

  );
}
