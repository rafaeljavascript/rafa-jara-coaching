import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col justify-start items-start prose text-base-content gap-2 mx-auto">
      <h1 className="text-black text-[56px] font-bold mb-1">Contact Me</h1>
      <h4>
        Let’s talk 👋 Whether you would like to partner with me or you would
        like to know more about coaching in general, I invite you to find a time
        on my calendly or email me. I look forward to hearing from you
      </h4>
      <div className="mt-3 gap-4 flex flex-row justify-between items-center">
        <a
          className="btn btn-outline"
          href="mailto:rafael.javascript@gmail.com"
        >
          Email
        </a>
        <a className="btn btn-outline" href="https://calendly.com/rjara-1">
          Calendly
        </a>
      </div>
    </div>
  );
}
