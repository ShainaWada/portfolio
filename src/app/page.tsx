import './globals.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <main className="bg-pink-50 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-body font-black">PORTFOLIO</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
          <div className="text-center  p-10">
            <h2 className="text-5xl py-2 text-rose-500 font-medium">
              Hogehoge Hoge
            </h2>
            <h3 className="text-2xl py-2 ">Web Developer & Designer</h3>
            <p className="text-md py-5 leading-7 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              impedit recusandae quo laboriosam autem, repellendus expedita
              quam.
            </p>
            <div className="text-5xl flex justify-center gap-16 text-gray-700">
              <AiFillGithub />
              <AiFillGithub />
              <AiFillGithub />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
