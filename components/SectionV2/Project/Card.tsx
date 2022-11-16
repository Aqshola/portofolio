import Next from "components/Icon/Next";
import ReactJS from "components/Icon/ReactJS";
import Tooltip from "components/Layout/Tooltip/Tooltip";
import Image from "next/image";
import React from "react";

import {
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiMaterialui,
  SiGo,
} from "react-icons/si";

type Props = {
  link: string;
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
    <div className="hover:shadow-outline-black flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-md border-2 border-black transition-shadow">
      <div className="flex h-96 flex-col px-5 pt-8 ">
        <div className="group relative flex w-fit items-center rounded-sm py-1 pr-3">
          <h3 className="font-nunito relative z-10  w-fit rounded text-2xl font-semibold transition-all">
            {title}
          </h3>
        </div>
        <p className=" mb-5 text-sm">{exercpt}</p>
        <div className="mt-auto flex gap-3 justify-self-end">
          {tech.stack.map((stack) => (
            <div className="relative flex h-7 w-7 rounded-full" key={stack}>
              {stack === "reactjs" && (
                <Tooltip tip="React JS">
                  <SiReact className="h-full w-full" />
                </Tooltip>
              )}
              {stack === "nextjs" && (
                <Tooltip tip="Next JS">
                  <SiNextdotjs className="h-full w-full" />
                </Tooltip>
              )}
              {stack === "tailwind" && (
                <Tooltip tip="Tailwind">
                  <SiTailwindcss className="h-full w-full" />
                </Tooltip>
              )}
              {stack === "expressjs" && (
                <Tooltip tip="Express JS">
                  <SiExpress className="h-full w-full" />
                </Tooltip>
              )}
              {stack === "mongodb" && (
                <Tooltip tip="MongoDB">
                  <SiMongodb className="h-full w-full" />
                </Tooltip>
              )}
              {stack === "materialui" && (
                <Tooltip tip="Material UI">
                  <SiMaterialui className="h-full w-full" />
                </Tooltip>
              )}

              {stack === "golang" && (
                <Tooltip tip="Golang">
                  <SiGo className="h-full w-full" />
                </Tooltip>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-yellow-primary mt-5 flex h-full w-full px-5 pt-5">
        <div className="relative inline-block aspect-video h-[initial] w-[initial] rounded overflow-hidden mx-auto">
          <Image
          sizes={img.url}
            src={img.url}
            fill={true}
            alt={img.alt || title}
            blurDataURL={img.blurUpThumb}
            placeholder="blur"
            className="relative object-fill h-[initial] w-[initial]"
          />
        </div>
      </div>
    </div>
  );
}
