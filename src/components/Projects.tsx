"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/libs/data";
import Project from "./Project";
import { useSectionInView } from "@/libs/hooks";
// import Project2 from "./Project2";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
        {/* {projectsData.map((project, index) => (
          <Project2 {...project} key={index} />
        ))} */}

        {/* <Project2 /> */}
      </div>
    </section>
  );
}
