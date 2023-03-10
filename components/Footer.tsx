import React from "react";

const Footer = () => {
  return (
    <footer className="mb-2 text-center">
      <div className="mx-auto max-w-6xl">
        <div className=" text-gray-400 md:mb-0">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-300"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://github.com/lukePeavey/quotable"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-300"
          >
            Quotable API
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-300"
          >
            Tailwind CSS
          </a>{" "}
          and{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-300"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
