import React from "react";
import icons from "@/libs/icons";
import { useFormStatus } from "react-dom";
const { FaPaperPlane } = icons;

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="h-[3rem] w-[8rem] flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 group disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {" "}
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all" />
        </>
      )}
    </button>
  );
}
