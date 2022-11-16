import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  boxChildTransition,
  containerTransition,
  opacityTransition,
} from "utils/transition";
import Card from "components/SectionV2/Project/Card";
import { DisplayProject, } from "types/types";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  listProject: DisplayProject[];
};

export default function Index({ listProject }: Props) {
  const [ref, inView] = useInView();
  // const router = useRouter();
  // const [showModal, setshowModal] = useState(false);

  function handleModal(slug: string) {}

  return (
    <motion.section
      ref={ref}
      variants={containerTransition}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      id="Project"
      className=" relative mt-10 flex min-h-screen w-full flex-col p-5 py-16 md:mt-20"
    >
      <motion.h2
        variants={boxChildTransition}
        className="font-nunito text-center text-5xl font-bold md:mx-auto md:text-6xl"
      >
        My Work
      </motion.h2>
      <motion.p
        variants={opacityTransition}
        className="font-nunito mx-auto mt-5 w-full text-center md:w-96"
      >
        Some of selected project {"I've"} been done
      </motion.p>

      <motion.div
        variants={containerTransition}
        initial="hidden"
        animate="show"
        className="mx-auto mt-20 grid w-full  grid-cols-12 gap-5 md:px-20"
      >
        {listProject.map((el) => (
          <motion.div
            key={el.id}
            variants={boxChildTransition}
            className="col-span-12 h-[370px] md:col-span-6 lg:col-span-3 "
            onClick={() => handleModal(el.id)}
          >
            <Link href={`/${el.slug}`}>
              <Card
                title={el.title}
                exercpt={el.exercpt}
                img={el.image}
                key={el.id}
                tech={el.stack}
                link={el.link}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
