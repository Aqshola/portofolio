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
    <motion.div variants={boxChildTransition}>
      <a
        {...props}
        className="hover:fill-yellow-primary block h-9 w-9 fill-black transition-all hover:-translate-y-2 cursor-pointer"
      >
        {children}
      </a>
    </motion.div>
  );
}
