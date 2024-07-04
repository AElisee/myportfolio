"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navlink = ({ link, onLinkClick }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      className={`p-2 px-3 sm:text-base md:text-sm ${
        link.url === "#" + activeLink
          ? "md:text-base font-semibold md:bg-indigo-900 rounded-xl text-black md:text-white"
          : ""
      }`}
      href={link.url}
      onClick={onLinkClick}
    >
      {link.name}
    </Link>
  );
};

export default Navlink;
