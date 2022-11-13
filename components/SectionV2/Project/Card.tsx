import React from "react";

type Props = {};

export default function Card({}: Props) {
  return (
    <div className="transition-shadow cursor-pointer flex w-full flex-col rounded-md border-2 border-black py-8 px-5 hover:shadow-outline-black">
      <div className="group relative w-fit h-full py-1 pr-3 flex items-center rounded-sm">
        <div className="transition-all group-hover:w-full absolute w-0 h-full  flex bg-yellow-primary">
        
        </div>
        <a className="relative z-10 transition-all  w-fit rounded font-nunito text-2xl font-semibold">ProjectA</a>
      </div>
      <p className="mt-1 text-sm">Small, Desription about project</p>
      <div className="mt-3 flex gap-3">
        <div className="block h-7 w-7 rounded-full bg-gray-500"></div>
        <div className="block h-7 w-7 rounded-full bg-gray-500"></div>
        <div className="block h-7 w-7 rounded-full bg-gray-500"></div>
      </div>
      <div className="mt-5 block h-32 w-full rounded bg-gray-600"></div>
    </div>
  );
}
