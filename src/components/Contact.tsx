"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/libs/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

interface FormStatus {
  message: string;
  status: "success" | "error" | null;
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: "",
    status: null,
  });

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:khoans1502@gmail">
          khoans1502@gmail.com
        </a>{" "}
        or through this form. I&apos;ll get back to you as soon as possible.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black/80"
        action={async (formData) => {
          const { data } = await sendEmail(formData);

          if (data?.error) {
            setFormStatus({ message: data?.error?.message, status: "error" });
            toast.error(data?.error?.message);
            return;
          }
          setFormStatus({
            message: "Email sent successfully",
            status: "success",
          });
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          onChange={() => setFormStatus({ message: "", status: null })}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          onChange={() => setFormStatus({ message: "", status: null })}
        />
        <SubmitButton />
        {formStatus.message && (
          <p
            className={
              formStatus.status === "success"
                ? "form-success-message"
                : "form-error-message"
            }
          >
            {formStatus.message}
          </p>
        )}
      </form>
    </motion.section>
  );
}
