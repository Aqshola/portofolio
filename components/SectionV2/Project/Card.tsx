import Next from "components/Icon/Next";
import ReactJS from "components/Icon/ReactJS";
import Image from "next/image";
import React from "react";

import { SiTailwindcss, SiExpress, SiReact, SiNextdotjs, SiMongodb, SiMaterialui } from "react-icons/si";

type Props = {
  link:string;
  title: string;
  exercpt: string;
  img: {
    url: string;
    alt: string;
    blurUpThumb: string;
  };
  tech: {
    stack: string[];
  };
};

export default function Card({ title, exercpt, img, tech, link }: Props) {
  return (
    <div className="hover:shadow-outline-black flex h-full w-full cursor-pointer flex-col rounded-md border-2 border-black transition-shadow">
      <div className="flex h-80 flex-col px-5 pt-8 ">
        <div className="group relative flex w-fit items-center rounded-sm py-1 pr-3">
          <h3 className="font-nunito relative z-10  w-fit rounded text-2xl font-semibold transition-all">
            {title}
          </h3>
        </div>
        <p className=" mb-5 text-sm">{exercpt}</p>
        <div className="mt-auto flex gap-3 justify-self-end">
          {tech.stack.map((stack) => (
            <div className="flex relative h-7 w-7 rounded-full" key={stack}>
              {stack === "reactjs" && <SiReact className="w-full h-full"  />}
              {stack === "nextjs" && <SiNextdotjs className="w-full h-full"  />}
              {stack === "tailwind" && (<SiTailwindcss className="h-full w-full" />)}
              {stack === "expressjs" && <SiExpress className="h-full w-full" />}
              {stack === "mongodb" && <SiMongodb className="h-full w-full" />}
              {stack === "materialui" && <SiMaterialui className="h-full w-full" />}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-yellow-primary mt-5 flex h-full w-full px-2 pt-5">
        <div className="relative inline-block h-full w-full rounded aspect-auto">
          <Image
            src={img.url}
            fill={true}
            alt={img.alt || title}
            blurDataURL={img.blurUpThumb}
            placeholder="blur"
            className="relative aspect-square w-full h-full  rounded-md object-fill"
          />
        </div>
      </div>
    </div>
  );
}
