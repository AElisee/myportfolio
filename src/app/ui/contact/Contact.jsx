import React from "react";
import PreviousSection from "../PreviousSection.jsx";
import ContactForm from "./ContactForm.jsx";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      className="min-h-[100vh] flex border-b  justify-center pt-14  pb-2 px-4 relative z-10"
      id="contact"
    >
      <div className="w-[600px] md:w-[1000px] flex flex-col gap-3 ">
        <div className="flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="w-full md:w-1/2 flex flex-col pb-8 md:pb-16">
              <div className="flex gap-2 items-center justify-center text-center">
                <span className="text-2xl md:text-3xl">🤝</span>
                <h3 className="text-indigo-800 text-2xl md:text-3xl font-semibold leading-12 underline">
                  Entrons en contact
                </h3>
              </div>
              <div className="py-5 md:py-14">
                <h4 className="text-xl md:text-2xl text-slate-600 text-wrap text-center">
                  Je suis impatient de collaborer avec vous ! 🎉
                </h4>
              </div>
              <div className="flex flex-col gap-1 py-5 md:pt-14">
                <p className="flex gap-1 items-center">
                  <IoLocationOutline size={21} className="text-slate-400" />
                  Abidjan, Côte d'ivoire
                </p>
                <p className="flex gap-1 items-center">
                  <MdOutlineEmail size={21} className="text-slate-400" />
                  contact@angekouassi.com
                </p>
                <p className="flex gap-1 items-center">
                  <MdOutlinePhonelinkRing
                    size={21}
                    className="text-slate-400"
                  />
                  (+225) 05 84 84 09 30
                </p>
                <a
                  href="https://www.linkedin.com/in/angekouassi"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex gap-1 items-center"
                >
                  <FaLinkedinIn size={21} className="text-slate-400" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
          </div>

          <div className="flex gap-2 justify-between">
            <PreviousSection sectionId="#portfolio" desc="portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
