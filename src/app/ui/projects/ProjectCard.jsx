import React from "react";
import Image from "next/image.js";

const ProjectCard = ({ project, color }) => {
  return (
    <div
      className={`${color} flex rounded-2xl overflow-hidden   border w-full md:w-[750px]`}
    >
      <div className="w-1/2 p-3 flex flex-col gap-3 justify-between">
        <h3 className="text-md">{project.title}</h3>
        <small className="text-xs">{project.description}</small>
        <small>Technologies: {project.stack}</small>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-800 hover:bg-white bg-indigo-900 text-white  text-sm flex items-center gap-2 p-2 px-4 border rounded-lg max-w-max"
        >
          Vister le site
        </a>
      </div>
      <div className="w-1/2 h-[100%]">
        <div className=" h-full bg-slate-200 relative rounded-lg shadow-md overflow-hidden transition hover:transform">
          <Image
            src={project.image}
            fill
            alt={project.url}
            className="w-full h-full object-cover object-center transition hover:transform hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
