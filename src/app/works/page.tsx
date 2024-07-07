import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Projects as projectData } from '../constant/Projects'

const Works = () => {
  return (
    <div className='max-w-fit w-full h-full pt-32 pb-6 flex flex-wrap justify-center gap-3 overflow-y-auto animate-fade-up animate-delay-300 animate-ease-in-out'>
      {projectData.map((project, index) => {
        return (
          <Link key={index} href={project.link} className='w-[clamp(18.75rem,16.477rem+11.36vw,25rem)] h-fit rounded-md overflow-hidden'>
            <Image
              className="w-auto h-auto object-cover"
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
            />
            <div className='w-full p-2 h-auto text-white bg-black/20 backdrop-blur-[1.5px]'>
              <h3 className='font-bold'>{project.title}</h3>
              <p className='text-[clamp(0.75rem,4vw,1rem)] '>{project.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Works
