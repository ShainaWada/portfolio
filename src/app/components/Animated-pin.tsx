import React from "react";
import { PinContainer } from "@/components/3d-pin";
import { ProjectsData } from '../components/ProjectsData';
import Image from "next/image";


export function AnimatedPin() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-auto">
      {ProjectsData.map((project, idx) => {
        return <PinContainer
          key={idx}
          title={`${project.title} ⇨`}
          href={project.link}
        >
          <a href={project.link} className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {project.title}
            </h3>
            <div className="flex flex-1 w-full mt-4 rounded-lg " >
              <Image
                className="transition hover:transition-opacity hover:opacity-80"
                src={project.image}
                alt={project.title}
              />
            </div>
          </a>
        </PinContainer>
      })}
    </div>
  );
}
