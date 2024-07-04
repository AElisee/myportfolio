import Link from "next/link.js";
import { MdOutlineNorthWest } from "react-icons/md";

const PreviousSection = ({ sectionId, desc }) => {
  return (
    <div className="md:pt-12 flex max-h-[100px]">
      <Link
        href={sectionId}
        className="flex items-center p-1 px-2 gap-1 w-[140px] h-[45px]"
      >
        <span className="flex rounded-full justify-center items-center">
          <MdOutlineNorthWest size={20} className="text-indigo-800" />
        </span>
        <span className="flex flex-col">
          {/* <small className="">Page suivante</small> */}
          <small className="underline text-indigo-600">{desc}</small>
        </span>
      </Link>
    </div>
  );
};

export default PreviousSection;
