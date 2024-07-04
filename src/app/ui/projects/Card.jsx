import Image from "next/image.js";
import React from "react";
import { FaEye } from "react-icons/fa";

const Card = ({ project }) => {
  return (
    <div className="min-w-[380px] w-full md:w-[49%]   h-[290px] rounded-md mb-3">
      <div className="h-5/6 bg-slate-200 relative rounded-lg shadow-md overflow-hidden">
        <Image
          src={project.image}
          fill
          alt={project.url}
          className="w-full h-full object-cover object-center "
        />
      </div>
      <div className="h-1/6 p-2 w-full flex justify-end items-center  ">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase text-indigo-800 underline font-bold  text-sm flex items-center gap-2"
        >
          <FaEye size={21} />
          <span> Inspecter</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
