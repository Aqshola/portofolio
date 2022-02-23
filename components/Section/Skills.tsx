import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";
import { boxChildTransition, boxParentTransition } from "../../utils/transition";
import { useInView } from "react-intersection-observer";

function Skills() {
  const [ref, inView] = useInView();
  return (
    <motion.section
      
      id="skills"
      className="mx-auto flex h-screen max-w-screen-xl flex-col justify-center px-5 text-center"
    >
      <h1 className="text-5xl font-bold md:text-6xl">Tech Stack</h1>
      <p className="mt-5  text-lg font-light md:text-xl">
        Stack i used while building a website
      </p>
      <motion.div
      ref={ref}
        id="list-tech"
        className="mt-24 flex flex-wrap justify-center gap-20"
        variants={boxParentTransition}
        initial="hidden"
        animate={inView ? "show" : ""}
      >

        <motion.a href="https://nextjs.org/" variants={boxChildTransition}>
          <SiNextdotjs className="h-16 w-16 md:h-24 md:w-24" />
        </motion.a>
        <motion.a href="https://reactjs.org/" variants={boxChildTransition}>
          <SiReact className="h-16 w-16 md:h-24 md:w-24" />
        </motion.a>
        <motion.a href="https://nodejs.org/en/" variants={boxChildTransition}>
          <SiNodedotjs className="h-16 w-16 md:h-24 md:w-24" />
        </motion.a>
        <motion.a href="https://www.typescriptlang.org/" variants={boxChildTransition}>
          <SiTypescript className="h-16 w-16 md:h-24 md:w-24" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Skills;
