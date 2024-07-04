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
import { SiHostinger } from "react-icons/si";

const SkillsItems = () => {
  return (
    <div className="w-full md:w-[45%] h-max border rounded-md flex flex-1 flex-wrap items-center p-2 bg-slate-100">
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <SiHtml5 className="text-3xl text-[#e34c26] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Html</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <FaCss3Alt className="text-3xl text-[#488ED3] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Css</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <FaSass className="text-3xl text-[#ED467E] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Sass</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <SiTailwindcss className="text-3xl text-[#0EB8D5] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Tailwindcss</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <IoLogoJavascript className="text-3xl text-[#F4E225] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Javascript</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <IoLogoReact className="text-3xl text-[#09D9FF] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">React.js</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <RiNextjsFill className="text-3xl text-[#080808] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Next.js</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <FaNodeJs className="text-3xl text-[#58A149] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Node.js</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <SiNpm className="text-3xl text-[#CF0808] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Npm</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <SiMui className="text-3xl text-[#0884FF] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-base">Mui</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <SiMongodb className="text-3xl text-[#5E993C] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-sm">Mongodb</p>
        </div>
      </div>
      {/* --- */}
      {/* item */}
      <div className="w-1/3 flex flex-col h-[110px] gap-2 p-2">
        <div className="flex items-center justify-center shadow-md h-4/5">
          <SiAdobephotoshop className="text-3xl text-[#001D34] hover:text-4xl" />
        </div>
        <div className="h-1/5 flex justify-center items-center">
          <p className="text-sm">Photoshop</p>
        </div>
      </div>
      {/* --- */}
    </div>
  );
};

export default SkillsItems;
