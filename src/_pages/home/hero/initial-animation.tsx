"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const InitialAnimation = ({ children }: IProps) => {
  return (
    <motion.div
      className="dark:bg-[url('/noise.webp')] bg-repeat bg-contain w-full h-full flex items-center"
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default InitialAnimation;
