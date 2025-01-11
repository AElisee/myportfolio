import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SiAdobephotoshop } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

const SkillsItems = () => {
  const ItemCard = ({ children, stack }) => {
    return (
      <div className=" w-[150px] md:w-[180px] flex flex-col h-[110px] gap-2 p-2 ">
        <div className="flex items-center justify-center shadow-sm h-4/5 bg-zinc-200 hover:bg-zinc-50 rounded-sm">
          {children}
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-md">{stack}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full h-max flex flex-1 flex-wrap items-center p-2  justify-center ">
      {/* html */}
      <ItemCard stack="Html">
        <SiHtml5 className="text-3xl text-gray-700 hover:text-[#e34c26] hover:text-4xl" />
      </ItemCard>

      {/* css */}
      <ItemCard stack="Css">
        <FaCss3Alt className="text-3xl text-gray-700 hover:text-[#488ED3] hover:text-4xl" />
      </ItemCard>

      {/* sass */}
      <ItemCard stack="Sass">
        <FaSass className="text-3xl text-gray-700 hover:text-[#ED467E] hover:text-4xl" />
      </ItemCard>

      {/* tailwind */}
      <ItemCard stack="Tailwindcss">
        <SiTailwindcss className="text-3xl text-gray-700 hover:text-[#0EB8D5] hover:text-4xl" />
      </ItemCard>

      {/* javascript */}
      <ItemCard stack="Javascript">
        <IoLogoJavascript className="text-3xl text-gray-700 hover:text-[#F4E225] hover:text-4xl" />
      </ItemCard>

      {/* TypeScript */}
      <ItemCard stack="TypeScript">
        <IoLogoJavascript className="text-3xl text-gray-700 hover:text-[#F4E225] hover:text-4xl" />
      </ItemCard>

      {/* React */}
      <ItemCard stack="React.js">
        <IoLogoReact className="text-3xl text-gray-700 hover:text-[#09D9FF] hover:text-4xl" />
      </ItemCard>

      {/* Nextjs */}
      <ItemCard stack="Next.js">
        <RiNextjsFill className="text-3xl text-gray-700 hover:text-[#080808] hover:text-4xl" />
      </ItemCard>

      {/* vuejs */}
      <ItemCard stack="Vue.js">
        <IoLogoVue className="text-3xl text-gray-700 hover:text-[#42B883] hover:text-4xl" />
      </ItemCard>

      {/* Node.js */}
      <ItemCard stack="Node.js">
        <FaNodeJs className="text-3xl text-gray-700 hover:text-[#58A149] hover:text-4xl" />
      </ItemCard>

      {/* Npm */}
      <ItemCard stack="Npm">
        <SiNpm className="text-3xl text-gray-700 hover:text-[#CF0808] hover:text-4xl" />
      </ItemCard>

      {/* Mui */}
      <ItemCard stack="Material UI">
        <SiMui className="text-3xl text-gray-700 hover:text-[#0884FF] hover:text-4xl" />
      </ItemCard>

      {/* mongo */}
      <ItemCard stack="Mongodb">
        <SiMongodb className="text-3xl text-gray-700 hover:text-[#5E993C] hover:text-4xl" />
      </ItemCard>

      {/* Photoshop */}
      <ItemCard stack="Photoshop">
        <SiAdobephotoshop className="text-3xl text-gray-700 hover:text-[#001D34] hover:text-4xl" />
      </ItemCard>

      {/* GitHub */}
      <ItemCard stack="GitHub">
        <FaGithub className="text-3xl text-gray-700 hover:text-[#001D34] hover:text-4xl" />
      </ItemCard>
    </div>
  );
};

export default SkillsItems;
