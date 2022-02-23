import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  boxChildTransition,
  boxParentTransition,
} from "../../utils/transition";
import ProjectCard from "../Card/ProjectCard";
import { Project as ProjectType } from "../../types/types";

type Props = {
  listProject: ProjectType[];
};

function Project({ listProject }: Props) {
  const [ref, inView] = useInView();
  return (
    <motion.section
      ref={ref}
      id="projects"
      className=" mx-auto mb-10 mt-28 flex  min-h-screen max-w-screen-xl flex-col px-5 text-center"
    >
      <h1 className=" font-catamaran text-5xl font-bold md:text-6xl">
        Project
      </h1>
      <p className="mt-5 text-lg font-light md:text-2xl">Work i has done</p>
      <motion.div
        variants={boxParentTransition}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-14 grid w-full grid-cols-9 justify-center gap-y-10 md:gap-16"
      >
        {listProject.map((project) => (
          <motion.div
            key={project.id}
            variants={boxChildTransition}
            className="col-span-9 md:col-span-4 lg:col-span-3  min-h-96"
          >
            <ProjectCard
              title={project.title}
              desc={project.exercpt}
              image={project.image.url}
              blurImage={project.image.blurUpThumb}
              link={project.link}
              stack={project.stack.stack}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Project;
