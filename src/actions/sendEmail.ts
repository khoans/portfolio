"use server";
import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/libs/utils";
import ContactFormEmail from "@/template/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      // from: "Contact <onboarding@resend.dev>",
      from: "Contact <asdf@gmail.com>",
      to: "khoans1502@gmail.com",
      subject: "Another message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data
  }
};
