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
      <motion.a  href={href} className={"transition-all relative w-fit py-1 flex items-center px-5 md:px-7 "+(active?"font-medium":" ")} {...props}>
        {active && (
          <motion.span
            className="absolute left-0 block h-full w-full bg-yellow-primary rounded-full "
            layoutId="active-layout"
            transition={{
              bounce:0.6,
              type:"spring",
            }}
          ></motion.span>
        )}
        <span className="relative md:text-lg font-nunito text-center">{children}</span>
      </motion.a>
    </AnimatePresence>
  );
}
