"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/libs/data";
import { useSectionInView } from "@/libs/hooks";


export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section id="experience" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      {/* Vertical Timeline add lineColor to html tag on the client, but not on the server, causing a hydration error */}
      <VerticalTimeline lineColor="">
        {experiencesData?.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#e1e5ec",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              dateClassName="vertical-date"
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
