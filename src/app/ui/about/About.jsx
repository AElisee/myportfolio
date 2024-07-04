import React from "react";
import NextSection from "../NextSection.jsx";
import PreviousSection from "../PreviousSection.jsx";
import SkillsItems from "../SkillsItems.jsx";

const About = () => {
  return (
    <section
      className="min-h-[100vh] flex border-b  justify-center pt-14  pb-2  px-4 z-10"
      id="about"
    >
      <div className="w-[600px] md:w-[1000px] flex flex-col gap-3">
        <div className="flex flex-col h-full">
          <div className="md:flex gap-5 mb-5">
            <div className="w-full md:w-[55%] flex flex-col gap-5">
              <div className="mb-5">
                <div className="flex gap-2 items-center pb-7">
                  <h3 className="text-indigo-800 text-2xl md:text-3xl font-semibold leading-12 underline ">
                    Mon Parcours en Un Coup d'Œil
                  </h3>
                  <span className="text-2xl md:text-3xl">🚀</span>
                </div>
                <p className="text-lg ">
                  Grâce à mes études dans des écoles d'informatique et à mon
                  parcours professionnel, j'ai acquis une expertise solide en
                  développement frontend. Je maîtrise les technologies de
                  dernières générations telles que React.js, Next.js et
                  Node.js... et j'ai aussi une expérience notable en support
                  technique. Mon objectif est de fournir des solutions
                  innovantes et de qualité pour chaque projet.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center pb-7 ">
                  <h3 className="text-indigo-800 text-2xl md:text-3xl font-semibold leading-12 underline">
                    Compétences & Expertises
                  </h3>
                  <span className="text-2xl md:text-3xl">🛠️</span>
                </div>
                <p className="text-lg ">
                  Mon parcours académique dans des écoles d'informatique et mon
                  expérience professionnelle m'ont permis de développer une
                  expertise dans les domaines suivants :
                </p>
                <div className="p-2">
                  <p className="font-bold pb-3">
                    <span className="">💡</span>Développement web
                  </p>
                  <p className="font-bold pb-3">
                    <span className="">
                      💡Support informatique & résolution de problèmes
                      informatique
                    </span>
                  </p>
                  <p className="font-bold pb-3">
                    <span className="">
                      💡Design graphique de flyers et de cartes de visite
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <SkillsItems />
          </div>

          <div className="flex gap-2 items-center justify-between">
            <PreviousSection sectionId="#accueil" desc="#acceuil" />
            <NextSection sectionId="#portfolio" desc="#portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
