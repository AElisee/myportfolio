"use client";
import { useEffect, useState } from "react";
import Navlink from "./Navlink.jsx";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Image from "next/image.js";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const navLinksItems = [
    {
      name: "Accueil",
      url: "#accueil",
    },
    {
      name: "A propos",
      url: "#about",
    },
    {
      name: "Portfolio",
      url: "#portfolio",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <div className="sticky top-0 w-[100%]  h-[60px] py-3 md:px-8 flex glass items-center justify-between px-4  z-50  rounded-md ">
      <div className="w-1/5">
        <div className="hidden md:flex md:items-center text-3xl   gap-3">
          <div className="w-[35px] h-[35px] cursor-pointer rounded-full  overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src="/images/ange-Elisee.jpg"
                fill
                alt="Ange-Elisée Kouassi"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <small className="text-sm"> Ange-Elisée</small>
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HiOutlineMenuAlt4 size={24} />
        </div>
      </div>
      <div className="hidden w-3/5 md:flex justify-center">
        {navLinksItems.map((item, index) => (
          <Navlink onLinkClick={handleLinkClick} key={index} link={item} />
        ))}{" "}
      </div>
      <div className="flex gap-3 w-1/5 justify-end">
        <a
          href="https://www.linkedin.com/in/angekouassi"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer p-[6px]  rounded-full"
        >
          <FaLinkedinIn size={21} className="text-indigo-800" />
        </a>
      </div>

      {isOpen && (
        <div className="fixed top-[59px] left-0 min-h-screen w-full bg-orange-50 flex flex-col items-center justify-center text-2xl gap-6 z-30">
          {navLinksItems.map((item, index) => (
            <Navlink onLinkClick={handleLinkClick} key={index} link={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
