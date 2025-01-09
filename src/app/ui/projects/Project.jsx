import React from "react";
import NextSection from "../NextSection.jsx";
import PreviousSection from "../PreviousSection.jsx";
import Card from "./Card.jsx";
import { projects } from "./projects.js";
import ProjectCard from "./ProjectCard.jsx";

const Project = () => {
  const colors = [
    "bg-stone-200/20",
    "bg-cyan-200/10",
    "bg-neutral-300/95",
    "bg-indigo-50",
  ];
  const getBgColor = (index) => {
    return colors[index % colors.length];
  };
  return (
    <section
      className="min-h-[100vh] flex border-b  justify-center pt-16  px-4 pb-2  px-4relative z-10 "
      id="portfolio"
    >
      <div className="w-[600px] md:w-[1000px] flex flex-col gap-3 ">
        <div className="flex flex-col h-full justify-end">
          <div className="flex flex-col gap-5 mb-5">
            <div className="flex gap-2 items-center">
              <h3 className="text-indigo-800 text-2xl md:text-3xl font-semibold leading-12 underline">
                Decouvrez mes réalisations
              </h3>
              <span className="text-2xl md:text-3xl">📂</span>
            </div>
            <div className="flex flex-col gap-8 items-center pt-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  color={getBgColor(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2 justify-between">
            <PreviousSection sectionId="#about" desc="#a-propos" />
            <NextSection sectionId="#contact" desc="#contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
