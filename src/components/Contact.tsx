"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/libs/hooks";
import { motion } from "framer-motion";
import icons from "@/libs/icons";
import { sendEmail } from "@/actions/sendEmail";

const { FaPaperPlane } = icons;

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:khoans1502@gmail">
          khoans1502@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 group"
        >
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all" />
        </button>
      </form>
    </motion.section>
  );
}
