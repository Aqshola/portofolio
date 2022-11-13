import React from "react";
import { motion } from "framer-motion";
import {
  boxChildTransition,
  containerTransition,
  opacityTransition,
} from "utils/transition";

export default function Index() {
  return (
    <motion.section
      id="Skills"
      className="flex w-full  flex-col md:h-[100vh] md:max-h-[700px] md:flex-row"
    >
      <div className="relative order-2 flex w-full flex-col gap-10 overflow-hidden md:order-1 md:w-1/2 md:flex-row md:px-5 lg:px-32">
        <div className="mt-10 inline align-top md:hidden">
          <div className="relative flex">
            <div className="box-image-horizontal pr-10">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
            <div className="box-image-horizontal pr-10">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
            <div className="box-image-horizontal pr-10">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
            <div className="box-image-horizontal pr-10">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
          </div>
        </div>
        <div className="mt-10 inline align-top md:hidden">
          <div className="relative flex">
            <div className="box-image-horizontal pr-24">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
            <div className="box-image-horizontal pr-24">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
            <div className="box-image-horizontal pr-24">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
            <div className="box-image-horizontal pr-24">
              <div className="h-[150px] w-[150px] border-2 border-black"></div>
            </div>
          </div>
        </div>

        <div className="hidden align-top md:inline-block">
          <div className="relative">
            <div className="box-image pb-10">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
            <div className="box-image pb-10">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
            <div className="box-image pb-10">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
            <div className="box-image pb-10">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
          </div>
        </div>
        <div className="hidden align-top md:inline-block">
          <div className="relative">
            <div className="box-image pb-24">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
            <div className="box-image pb-24">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
            <div className="box-image pb-24">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
            <div className="box-image pb-24">
              <div className="h-[200px] w-[200px] border-2 border-black"></div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={containerTransition}
        initial="hidden"
        animate="show"
        className="bg-yellow-primary order-1 flex w-full flex-col justify-center p-5 py-16 md:order-2 md:w-1/2"
      >
        <motion.h2
          variants={boxChildTransition}
          className=" text-5xl font-bold md:text-6xl"
        >
          What can i do?
        </motion.h2>
        <motion.p variants={opacityTransition} className="mt-5 leading-relaxed">
          What can I do? well, currently I'm exploring frontend development, but
          sometimes im also be able to code some backend stuff when it needed,
          so you can call full stack but much prefer frontend, here list of tech
          stack I've been used
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
