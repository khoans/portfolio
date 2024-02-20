"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/libs/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <p>
          As a web developer, I have acquired foundational and proficiency
          skills in ReactJS, NodeJS and Python and their related framework,
          despite my limited professional experience. Through professional work
          and personal projects, I&apos;ve developed a solid understanding of
          these technologies and their application in website development.
        </p>
        <p>
          With a passion for coding, a commitment to continuous growth and the
          curiosity of learning the intricacy of system infrastructure, I&apos;m
          eager to contribute to a development team where I can apply my
          knowledge to practical use and expand my boundary under the guidance
          of senior developers.
        </p>
      </p>
    </motion.section>
  );
}
