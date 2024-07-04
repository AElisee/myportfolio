"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { BsSendCheckFill } from "react-icons/bs";
import { BsSendDashFill } from "react-icons/bs";

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const [pending, setPending] = useState(false);
  const formMesRef = useRef(null);
  const form = useRef();

  useEffect(() => {
    formMesRef.current = document.querySelector(".formMessage");
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    form &&
      emailjs
        .sendForm("service_ul8a3u7", "template_4gbzuck", form.current, {
          publicKey: "XSuJrqwb3tXKciiRe",
        })
        .then(
          (result) => {
            form.current.reset();
            setMessage(
              <p className="w-full text-base flex items-center gap-2">
                <BsSendCheckFill size={21} className="text-green-700" />
                Votre message a été transmis avec succès.
              </p>
            );

            setPending(false);
            setTimeout(() => {
              setMessage(null);
            }, 7000);
          },
          (error) => {
            setMessage(
              <p className="w-full text-base flex items-center gap-2">
                <BsSendDashFill size={21} className="text-red-500" />
                Oups, problème d'envoi. Veuillez réessayer.
              </p>
            );
            setPending(false);
          }
        );
  };
  return (
    <form
      className="md:p-3 flex flex-col gap-4
    "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="w-full">
        <label htmlFor="name" className="w-full">
          Nom / Entreprise
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom / entreprise"
          className="w-full  py-2 bg-transparent  border-b-2 border-sky-700 outline-none"
        />
      </div>
      <div className="w-full">
        <label htmlFor="email" className="w-full">
          Email <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="contact@angekouassi.com"
          className="w-full  py-2 bg-transparent  border-b-2 border-sky-700 outline-none"
        />
      </div>
      <div className="w-full">
        <label htmlFor="subject" className="w-full">
          Object <span>*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Nouveau projet"
          required
          className="w-full  py-2 bg-transparent  border-b-2 border-sky-700 outline-none"
        />
      </div>
      <div className="w-full">
        <label htmlFor="message" className="w-full">
          Message <span>*</span>
        </label>
        <textarea
          required
          id="message"
          name="message"
          className="w-full py-2 bg-transparent  border-b-2 border-sky-700 outline-none"
          rows={3}
          placeholder="Dites-moi plus..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center
       gap-1 cursor-pointer bg-white w-max p-2 px-6 shadow-md hover:bg-slate-50 font-semibold"
      >
        {pending ? "En cours d'envoi..." : "Envoyer"}
        <IoMdSend className="text-indigo-800" />
      </button>
      <p className="formMessage">{message}</p>
    </form>
  );
};

export default ContactForm;
