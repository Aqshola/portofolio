import React from "react";
import { motion } from "framer-motion";
import {
  boxChildTransition,
  containerTransition,
  opacityTransition,
} from "utils/transition";
import MarqueDesktop from "./MarqueDesktop";
import MarqueeMobile from "./MarqueeMobile";
import { useInView } from "react-intersection-observer";

export default function Index() {
  const [ref, inView] = useInView();
  return (
    <motion.section
      id="Skills"
      ref={ref}
      className="flex w-full  flex-col md:h-[100vh] md:max-h-[700px] md:flex-row"
    >
      {/* VISUAL */}
      <div className="relative order-2 flex w-full flex-col gap-10 overflow-hidden md:order-1 md:w-1/2 md:flex-row md:px-5 lg:px-32">
        <MarqueDesktop />
        <MarqueeMobile />
      </div>

      {/* TEXT */}
      <motion.div
        variants={containerTransition}
        initial="hidden"
        animate={inView?"show":"hidden"}
        className="bg-yellow-primary order-1 flex w-full flex-col  px-5 py-16 md:order-2 md:w-1/2 md:px-10 md:py-24"
      >
        <motion.h2
          variants={boxChildTransition}
          className=" text-5xl font-bold md:text-6xl"
        >
          What can i do?
        </motion.h2>
        <motion.p
          variants={opacityTransition}
          className="mt-5 text-sm leading-relaxed md:text-base"
        >
          Currently {"I'm"} focusing frontend development, but sometimes im also
          be able to code some backend stuff when it needed. Some of tech stack{" "}
          {"I've"} been used such as
        </motion.p>
        <table className="mt-2 text-sm md:text-base">
          <tbody>
            <tr>
              <td className="font-medium">Language</td>
              <td>:</td>
              <td>Javascript, Typescript, PHP</td>
            </tr>
            <tr>
              <td className="font-medium">Web Framework</td>
              <td>:</td>
              <td>React Js, Next Js, Express, Laravel</td>
            </tr>
            <tr>
              <td className="font-medium">Database</td>
              <td>:</td>
              <td>MySQL, PostgreSQL, MongoDB</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
}
