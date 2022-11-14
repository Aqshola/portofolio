import Laravel from "components/Icon/Laravel";
import Mongo from "components/Icon/Mongo";
import Next from "components/Icon/Next";
import Node from "components/Icon/Node";
import Php from "components/Icon/Php";
import Postgre from "components/Icon/Postgre";
import ReactJS from "components/Icon/ReactJS";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typescript from "components/Icon/Typescript";

type Props = {};

export default function MarqueDesktop({}: Props) {
  return (
    <>
      <div className="hidden align-top md:flex gap-10">
        <div className="flex h-full flex-col justify-center overflow-hidden">
          <div className="marquee-vertical">
            <BoxSkillTop>
              <Next />
            </BoxSkillTop>
            <BoxSkillTop>
              <ReactJS />
            </BoxSkillTop>
            <BoxSkillTop>
              <Node />
            </BoxSkillTop>
            <BoxSkillTop>
              <Typescript />
            </BoxSkillTop>
          </div>
          <div className="marquee-vertical">
            <BoxSkillTop>
              <Next />
            </BoxSkillTop>
            <BoxSkillTop>
              <ReactJS />
            </BoxSkillTop>
            <BoxSkillTop>
              <Node />
            </BoxSkillTop>
            <BoxSkillTop>
              <Typescript />
            </BoxSkillTop>
          </div>
          <div className="marquee-vertical">
            <BoxSkillTop>
              <Next />
            </BoxSkillTop>
            <BoxSkillTop>
              <ReactJS />
            </BoxSkillTop>
            <BoxSkillTop>
              <Node />
            </BoxSkillTop>
            <BoxSkillTop>
              <Typescript />
            </BoxSkillTop>
          </div>
        </div>
        <div className="flex h-full flex-col justify-center overflow-hidden">
          <div className="marquee-vertical">
            <BoxSkillBottom>
              <Laravel />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Php />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Postgre />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Mongo />
            </BoxSkillBottom>
          </div>
          <div className="marquee-vertical">
            <BoxSkillBottom>
              <Laravel />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Php />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Postgre />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Mongo />
            </BoxSkillBottom>
          </div>
          <div className="marquee-vertical">
            <BoxSkillBottom>
              <Laravel />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Php />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Postgre />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Mongo />
            </BoxSkillBottom>
          </div>
        </div>
        {/* <motion.div animate={{
            y:["-100%", "100%"],
        }} transition={{
            repeat:Infinity,
            repeatType:"loop",
            duration:5,
            ease:"linear"
        }} className="relative" id="marquee-container">
          <BoxSkillTop>
            <Next />
          </BoxSkillTop>
          <BoxSkillTop>
            <ReactJS />
          </BoxSkillTop>
          <BoxSkillTop>
            <Node />
          </BoxSkillTop>
          <BoxSkillTop>
            <Typescript />
          </BoxSkillTop>
        </motion.div> */}
      </div>
      <div className="hidden align-top md:inline-block">
        <div className="relative"></div>
      </div>
    </>
  );
}

type BoxProps = {
  children: React.ReactNode;
};

function BoxSkillTop({ children }: BoxProps) {
  return (
    <div className="box-image box-image-top pb-10 transition-all duration-500">
      <div className="h-[200px] w-[200px] border-2 border-black">
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function BoxSkillBottom({ children }: BoxProps) {
  return (
    <div className="box-image pb-24">
      <div className="h-[200px] w-[200px] border-2 border-black">
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
