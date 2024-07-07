import React from 'react'
import { Skills as skillsData } from "@/app/constant/Skills";
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  return (
    <div className='w-full h-full pt-32 pb-6 grid gap-2 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] overflow-y-auto sm:gap-x-6 md:w-[80%] animate-fade-up animate-delay-300 animate-ease-in-out -z-10'>
      {skillsData.map((skill, index) => (
        <div key={index} className='h-fit border border-[#f65e78] p-4 flex flex-col justify-center bg-white/20 shadow-md'>
          <div className='flex justify-between items-end'>
            <skill.icon className='size-[clamp(2rem,0.909rem+5.45vw,5rem)] aspect-square text-[#ebeaea] text-shadow' />
            <span className='text-2xl text-slate-800'>{`${skill.progress}%`}</span>
          </div>
          <h3 className='font-bold text-[#ec7084] text-shadow-title'>{skill.name}</h3>
          <Progress value={skill.progress} className='bg-white/15 text-red-400 h-[0.75rem] shadow shadow-white' />
        </div>
      ))}
    </div>
  )
}

export default Skills
