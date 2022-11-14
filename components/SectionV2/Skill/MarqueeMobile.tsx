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

export default function MarqueeMobile({}: Props) {
  return (
    <>
      <div className="mt-10 inline align-top md:hidden">
        {/* MARQUEE TOP */}
        <div className="flex items-center overflow-hidden">
          {/* MARQUEE */}
          <div className="marquee-horizontal">
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
          <div className="marquee-horizontal">
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
        <div className="flex items-center overflow-hidden">
          {/* MARQUEE */}
          <div className="marquee-horizontal mt-10">
            <BoxSkillBottom>
              <Php />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Laravel />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Postgre />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Mongo />
            </BoxSkillBottom>
          </div>
          <div className="marquee-horizontal mt-10">
            <BoxSkillBottom>
              <Php />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Laravel />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Postgre />
            </BoxSkillBottom>
            <BoxSkillBottom>
              <Mongo />
            </BoxSkillBottom>
          </div>
        </div>
      </div>
    </>
  );
}

type BoxProps = {
  children: React.ReactNode;
};

function BoxSkillTop({ children }: BoxProps) {
  return (
    <div className="box-image-horizontal pr-10">
      <div className="h-[150px] w-[150px] border-2 border-black">
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function BoxSkillBottom({ children }: BoxProps) {
  return (
    <div className="box-image-horizontal pr-24">
      <div className="h-[150px] w-[150px] border-2 border-black">
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
