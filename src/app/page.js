import Link from "next/link.js";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
const page = () => {
  return (
    <div className=" h-full flex items-center justify-center">
      <div className="w-[600px] flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center gap-2 mb-5">
          <h1 className="text-indigo-800 text-2xl md:text-3xl font-bold">
            Bonjour, je suis Ange-Elisée !
          </h1>
          <h2 className="text-xl font-semibold uppercase">Développeur web</h2>
        </div>
        <p className="text-xl font-semibold text-red-400">
          Nous sommes en maintenance pour une nouvelle apparence !
        </p>
        <p className="text-base font-medium">
          Merci de votre compréhension pendant que nous travaillons à rendre
          notre portfolio encore plus attrayant. Revenez bientôt pour découvrir
          nos mises à jour !
        </p>
        <div className="flex gap-2 mt-3">
          <a
            href="https://www.linkedin.com/in/angekouassi"
            target="_blank"
            className="p-1 px-2 bg-slate-900 rounded-[100px] max-w-max sm:w-full flex items-center gap-2 shadow-md align-center"
          >
            <span className="p-2 rounded-full bg-white">
              <FaLinkedinIn className="text-indigo-800 text-xl" />
            </span>
            <span className="text-white">LinkedIn</span>
          </a>
          <p className="p-1 px-2 bg-slate-900 rounded-[100px] max-w-max sm:w-full flex items-center gap-2 shadow-md align-center">
            <span className="p-2 rounded-full bg-white">
              <MdOutlineMailOutline className="text-indigo-800 text-xl" />
            </span>
            <span className="text-white">2kange.eli@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
