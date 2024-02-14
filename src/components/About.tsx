"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        semper justo. Fusce vel mi vitae libero imperdiet aliquet. Vivamus vitae
        purus ut urna fringilla cursus. Maecenas consectetur magna nec velit
        fermentum, nec venenatis mi cursus. Duis vitae leo sit amet metus
        porttitor vehicula. Phasellus efficitur commodo urna, eget luctus lorem
        vestibulum et.
        <span className="italic">
          Nam non sapien vel risus consectetur ultricies. Donec in dolor vitae
          magna suscipit suscipit.
        </span>
        Suspendisse potenti. Duis vel nisi nec orci maximus aliquam. Quisque
        ultricies nunc ut ex vulputate tristique.
        <span className="font-medium">Integer non sapien ipsum.</span>
        <span className="font-medium">Vestibulum feugiat mauris at.</span>
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing with my dog. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
