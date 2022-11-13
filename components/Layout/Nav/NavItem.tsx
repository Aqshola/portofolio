import React from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"title"> {
  children: React.ReactNode;
  active?: boolean;
  href:string
  layoutId?:string
};

export default function NavItem({href, children, active=false,layoutId, ...props }: Props) {
  return (
    <AnimatePresence>
      <motion.a  href={href} className={"transition-all relative w-fit py-1 flex items-center px-5 md:px-7 "+(active?"font-medium":" ")} {...props}>
        {active && (
          <motion.div
            className="absolute left-0 block h-full w-full bg-yellow-primary rounded-full "
            layoutId={"active-layout"+(layoutId?"-"+layoutId:"")}
            transition={{
              bounce:0.6,
              type:"spring",
            }}
          ></motion.div>
        )}
        <span className="relative md:text-lg font-nunito text-center">{children}</span>
      </motion.a>
    </AnimatePresence>
  );
}
