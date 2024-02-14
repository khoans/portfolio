"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/libs/utils";

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

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "khoans1502@gmail.com",
      subject: "Another message from contact form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
return {
    error: getErrorMessage(error)
}
  }
};
