import React from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"title"> {
  children: React.ReactNode;
  active?: boolean;
  href:string
};

export default function NavItem({href, children, active=false, ...props }: Props) {
  return (
    <AnimatePresence>
      <motion.a  href={href} className={"transition-all relative px-2  "+(active?"font-bold":" ")} {...props}>
        {active && (
          <motion.span
            className="absolute left-0 block h-full w-full bg-[#FEF7D0]"
            layoutId="active-layout"
          ></motion.span>
        )}
        <span className="relative">{children}</span>
      </motion.a>
    </AnimatePresence>
  );
}
