"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="group flex flex-col flex-wrap items-start text-lg text-gray-800 gap-3">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div
            key={category}
            className="flex flex-1 items-start justify-center gap-5 w-full"
          >
            <motion.h3
              className="capitalize  flex-shrink-0 text-xl font-medium mb-8"
              style={{ flexBasis: "150px", flexGrow: 0 }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={categoryIndex}
            >
              {category}
            </motion.h3>
            <div className="flex flex-wrap justify-start gap-2 w-full">
              {skills.map((skill, skillIndex) => (
                <div key={skill} className="flex items-center">
                  <motion.li
                    className="bg-white borderBlack rounded-xl px-5 py-3"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={skillIndex}
                  >
                    {skill}
                  </motion.li>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
