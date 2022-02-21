import { motion } from 'framer-motion'
import React from 'react'
import InView, { useInView } from 'react-intersection-observer'
import { boxChildTransition, boxParentTransition } from '../../utils/transition'
import ProjectCard from '../Card/ProjectCard'




function Project() {
  const [ref, inView]=useInView()
  return (
    <motion.section ref={ref} id="projects" className=" mx-auto flex flex-col  mt-28 h-screen max-w-screen-xl px-5 text-center">
        <h1 className=" text-5xl md:text-6xl font-bold font-catamaran">Project</h1>
        <p className="mt-5 text-lg md:text-2xl font-light">Work i has done</p>
        <motion.div variants={boxParentTransition} initial="hidden" animate={inView?"show":"hidden"} className="grid grid-cols-9 w-full justify-center mt-14 gap-y-10 md:gap-16">
          <motion.div variants={boxChildTransition} className='col-span-9 md:col-span-4 lg:col-span-3'>
              <ProjectCard/>
          </motion.div>
          <motion.div variants={boxChildTransition} className='col-span-9 md:col-span-4 lg:col-span-3'>
              <ProjectCard/>
          </motion.div>
          <motion.div variants={boxChildTransition} className='col-span-9 md:col-span-4 lg:col-span-3'>
              <ProjectCard/>
          </motion.div>
          <motion.div variants={boxChildTransition} className='col-span-9 md:col-span-4 lg:col-span-3'>
              <ProjectCard/>
          </motion.div>
          <motion.div variants={boxChildTransition} className='col-span-9 md:col-span-4 lg:col-span-3'>
              <ProjectCard/>
          </motion.div>
          
        </motion.div>
      </motion.section>
  )
}

export default Project