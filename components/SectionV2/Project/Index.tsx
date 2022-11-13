import React from "react";
import { motion } from "framer-motion";
import {
  boxChildTransition,
  containerTransition,
  opacityTransition,
} from "utils/transition";
import Card from "components/SectionV2/Project/Card";

type Props = {};

export default function Index({}: Props) {
  return (
    <motion.section
      variants={containerTransition}
      initial="hidden"
      animate="show"
      id="Project"
      className=" mt-10 flex min-h-screen w-full flex-col p-5 md:mt-20"
    >
      <motion.h2
        variants={boxChildTransition}
        className="font-nunito text-center text-5xl font-bold md:mx-auto md:text-6xl"
      >
        My Work
      </motion.h2>
      <motion.p
        variants={opacityTransition}
        className="font-nunito mx-auto mt-10 w-full text-center md:w-96"
      >
        Welcome to the "My Work" section, there is a list of professional,
        collaborating, or even personal work I have done while exploring web
        development
      </motion.p>

      <motion.div
        variants={containerTransition}
        initial="hidden"
        animate="show"
        className="mx-auto mt-20 grid w-full  grid-cols-12 md:px-20"
      >
        <motion.div
          variants={boxChildTransition}
          className="col-span-12 md:col-span-6 lg:col-span-3"
        >
          <Card />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
