import Link from "next/link.js";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineSouthEast } from "react-icons/md";

const NextSection = ({ sectionId, desc }) => {
  return (
    <div className="md:pt-12 flex max-h-[100px]">
      <Link
        href={sectionId}
        className="flex items-center justify-end p-1 px-2 gap-1 w-[140px] h-[45px]"
      >
        <span className="flex flex-col">
          {/* <small className="">Page suivante</small> */}
          <small className="underline text-indigo-600">{desc}</small>
        </span>
        <span className="flex rounded-full justify-center items-center">
          <MdOutlineSouthEast size={20} className="text-indigo-800" />
        </span>
      </Link>
    </div>
  );
};

export default NextSection;
