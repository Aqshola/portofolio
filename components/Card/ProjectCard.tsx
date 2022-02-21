import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

export default function ProjectCard() {
  return (
    <div
      className="hover:shadow-outline-black flex w-full flex-col border-2 border-black px-4 pt-4
          text-left transition-all"
    >
      <h2 className="font-semibold group relative w-max hover:cursor-alias">
        <span className="absolute top-0 left-0 z-0 block h-full w-0 bg-[#FEF7D0] transition-all group-hover:w-full"></span>
        <span className="relative w-max transition-all hover:px-1">Judul</span>
      </h2>
      <p className="text-sm">Deskripsi</p>
      <div className="flex mt-3">
        <SiNextdotjs className="w-5 h-5"/>
        
      </div>
      

      {/* nanti ganti image disini */}
      <div className="mt-5 block h-56 w-full bg-gray-300"></div>
    </div>
  );
}
