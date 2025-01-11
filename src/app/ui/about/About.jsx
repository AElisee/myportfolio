import React from "react";
import NextSection from "../NextSection.jsx";
import PreviousSection from "../PreviousSection.jsx";
import SkillsItems from "../SkillsItems.jsx";
import { FaLaptopCode } from "react-icons/fa6";
import { AiFillApi } from "react-icons/ai";
import { VscSymbolColor } from "react-icons/vsc";

const About = () => {
  const ExpertiseCard = ({ children, titre, description, bgColor }) => {
    return (
      <div
        className={`${bgColor} shadow-md w-[90%] md:w-[290px] h-[140px] border rounded-xl p-3 flex flex-col gap-3`}
      >
        <div className="flex gap-3 items-center">
          <span className="w-[40px] h-[40px] rounded-full bg-slate-400/30 flex justify-center items-center">
            {children}
          </span>
          <span>{titre}</span>
        </div>
        <p className="text-xs">
          <i>{description}</i>
        </p>
      </div>
    );
  };
  return (
    <section
      className="min-h-[100vh] flex border-b  justify-center pt-16  px-4 pb-2  px-4relative z-10 "
      id="about"
    >
      <div className="w-[600px] md:w-[1000px] flex flex-col gap-3 ">
        <div className="flex flex-col h-full justify-end">
          <div className="flex flex-col gap-5 mb-5">
            <div className="flex  gap-2 items-center justify-center">
              <span className="text-2xl md:text-3xl">🚀</span>
              <h3 className="text-indigo-800 text-2xl md:text-3xl font-semibold leading-12 ">
                Mon Parcours en Un Coup d'Œil
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <p className="text-md w-full md:w-[800px] text-center">
                Grâce à mes études dans des écoles d'informatique et à mon
                parcours professionnel, j'ai acquis une expertise solide en
                développement frontend. Je maîtrise les technologies de
                dernières générations telles que React.js, Next.js et Node.js...
                et j'ai aussi une expérience notable en support technique. Mon
                objectif est de fournir des solutions innovantes et de qualité
                pour chaque projet.
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center pb-7 justify-center pt-5">
                <span className="text-2xl md:text-3xl">🛠️</span>
                <h3 className="text-indigo-800 text-2xl md:text-3xl font-semibold leading-12">
                  Compétences & Expertises
                </h3>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-md w-full md:w-[800px]  text-center">
                  Mon parcours académique dans des écoles d'informatique et mon
                  expérience professionnelle m'ont permis de développer une
                  expertise dans les domaines suivants :
                </p>
                <div className="pt-5 flex flex-wrap gap-3 justify-center">
                  <ExpertiseCard
                    bgColor="bg-gradient-to-b from-neutral-200/50 to-neutral-50"
                    titre="Développement web"
                    description="Conception et développement de sites et d'applications web modernes, optimisés pour offrir une expérience utilisateur fluide et performante."
                  >
                    <FaLaptopCode className="  w-5 h-5" />
                  </ExpertiseCard>
                  <ExpertiseCard
                    bgColor="bg-gradient-to-b from-sky-200/50 to-sky-100"
                    titre="Support technique"
                    description="Assistance technique pour résoudre les problèmes informatiques, garantir la stabilité des systèmes et accompagner les utilisateurs."
                  >
                    <AiFillApi className="  w-5 h-5" />
                  </ExpertiseCard>
                  <ExpertiseCard
                    bgColor="bg-gradient-to-b from-rose-200/50 to-rose-50"
                    titre="Infographie"
                    description="Réalisation d’affiches publicitaires attrayantes, combinant créativité et stratégie pour capter l’attention."
                  >
                    <VscSymbolColor className="  w-5 h-5" />
                  </ExpertiseCard>
                </div>
              </div>

              <div className="w-full flex flex-col items-center pt-7">
                <p className="text-md w-full md:w-[800px] text-center">
                  Les technologies et outils que j’utilise au quotidien :
                </p>
              </div>
            </div>

            <div>
              <SkillsItems />
            </div>

            <div className="flex gap-2 items-center justify-between">
              <PreviousSection sectionId="#accueil" desc="acceuil" />
              <NextSection sectionId="#portfolio" desc="portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
