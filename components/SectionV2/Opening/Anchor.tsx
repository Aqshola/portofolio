import React, { HTMLProps } from "react";
import { motion } from "framer-motion";
import { boxChildTransition } from "utils/transition";

type Props = {
  children: React.ReactNode;
};

export default function Anchor({
  children,
  ...props
}: Props & HTMLProps<HTMLAnchorElement>) {
  return (
    <motion.div variants={boxChildTransition} className="group">
      <a
        {...props}
        className="group-hover:fill-yellow-primary block h-9 w-9 fill-black transition-all group-hover:-translate-y-2 cursor-pointer"
      >
        {children}
      </a>
    </motion.div>
  );
}
