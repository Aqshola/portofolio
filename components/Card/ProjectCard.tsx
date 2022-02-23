import Image from "next/image";
import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import Tooltip from "../tooltip/Tooltip";

type ProjectCard = {
  title: string;
  desc: string;
  link: string;
  stack: string[];
  image: string;
  blurImage: string;
};
export default function ProjectCard({ ...props }: ProjectCard) {
  return (
    <div
      className="hover:shadow-outline-black flex h-full w-full flex-col border-2 border-black px-4
          pt-4 text-left transition-all"
    >
      <h2 className="group relative w-max font-semibold hover:cursor-alias">
        <span className="absolute top-0 left-0 z-0 block h-full w-0 bg-[#FEF7D0] transition-all group-hover:w-full"></span>
        <a
          href={props.link}
          className="relative w-max transition-all hover:px-1"
        >
          {props.title}
        </a>
      </h2>
      <p className="text-sm">{props.desc}</p>
      <div className="mt-3 flex gap-3">
        {props.stack.map((stack) => (
          <>
            {stack === "reactjs" && (
              <Tooltip tip="React Js" size="small">
                <SiReact className="h-5 w-5" />
              </Tooltip>
            )}
            {stack === "nextjs" && (
              <Tooltip tip="Next Js" size="small">
                <SiNextdotjs className="h-5 w-5" />
              </Tooltip>
            )}
            {stack === "tailwind" && (
              <Tooltip tip="Tailwind CSS" size="small">
                <SiTailwindcss className="h-5 w-5" />
              </Tooltip>
            )}
            {stack === "expressjs" && (
              <Tooltip tip="Express JS" size="small">
                <SiExpress className="h-5 w-5" />
              </Tooltip>
            )}
          </>
        ))}
      </div>

      {/* nanti ganti image disini */}
      <div className="relative mt-5 block h-56 w-full">
        <Image
          objectFit="cover"
          src={props.image}
          placeholder="blur"
          blurDataURL={props.blurImage}
          alt={`${props.title} - display`}
          layout="fill"
        />
      </div>
    </div>
  );
}
