import Image from "next/image";
import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss
} from "react-icons/si";



type ProjectCard={
  title:string,
  desc:string,
  link:string,
  stack:string[],
  image:string,
  blurImage:string,
}
export default function ProjectCard({...props}:ProjectCard) {
  return (
    <div
      className="hover:shadow-outline-black flex w-full flex-col border-2 border-black px-4 pt-4
          text-left transition-all"
    >
      <h2 className="font-semibold group relative w-max hover:cursor-alias">
        <span className="absolute top-0 left-0 z-0 block h-full w-0 bg-[#FEF7D0] transition-all group-hover:w-full"></span>
        <a href={props.link} className="relative w-max transition-all hover:px-1">{props.title}</a>
      </h2>
      <p className="text-sm">{props.desc}</p>
      <div className="flex mt-3 gap-3">
        {props.stack.map((stack)=>(
          <>
            {stack==="reactjs"&&<SiReact className="w-5 h-5"/>}
            {stack==="nextjs"&&<SiNextdotjs className="w-5 h-5"/>}
            {stack==="tailwind"&&<SiTailwindcss className="w-5 h-5"/>}
            {stack==="expressjs"&&<SiExpress className="w-5 h-5"/>}
          </>
        ))}
      </div>
      

      {/* nanti ganti image disini */}
      <div className="relative mt-5 block h-56 w-full">
        <Image objectFit="cover" src={props.image} placeholder="blur" blurDataURL={props.blurImage} alt={`${props.title} - display`} layout="fill"/>
      </div>
    </div>
  );
}
