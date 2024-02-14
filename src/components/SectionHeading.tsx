"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </motion.h2>
  );
}
