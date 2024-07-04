import NextSection from "../NextSection.jsx";

const Header = () => {
  return (
    <section
      className="header w-full h-[calc(100vh-60px)] flex border-b items-center justify-center pt-5 px-4 relative z-10"
      id="accueil"
    >
      <div className="w-[600px] md:w-[1000px] flex flex-col gap-3  h-full ">
        <div className="flex flex-col h-full justify-end">
          <div className="flex flex-col justify-center md:justify-end items-center md:pb-5 h-4/5">
            <div className="flex flex-col gap-5 mb-5">
              <h1 className="text-indigo-800 text-center text-2xl  font-semibold leading-12">
                Bonjour, je suis Ange-Elisée !
                <span className="helloHand pr-3">👋</span>
              </h1>
              <h2 className="text-4xl font-semibold md:w-[600px] leading-tight text-orange-500 text-center px-4 py-2">
                Développeur web <span className="text-indigo-800">&</span>{" "}
                Support informatique
              </h2>
            </div>
            <p className="w-full text-lg md:w-[500px] text-center">
              Avec une expertise approfondie en développement frontend, je crée
              des applications web performantes, interactives et évolutives en
              utilisant des technologies de dernière génération.
            </p>
          </div>
          <div className="flex gap-2 items-center justify-end">
            <NextSection sectionId="#about" desc="#a-propos" />
          </div>
        </div>
      </div>

      <div className="w-24 h-24 rounded-full absolute bottom-2 left-0 transform -translate-x-[50%] bg-orange-100"></div>

      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full absolute top-5 right-0 transform   bg-indigo-100"></div>
    </section>
  );
};

export default Header;
