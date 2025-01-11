import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full p-5 md:px-8">
      <div className="flex justify-between items-center w-full">
        <div className="w-1/2 flex items-center">
          <small className="text-sm ">angekouassi.com</small>
        </div>
        <div className="w-1/2  flex items-center justify-end">
          <small className="text-sm ">
            © {new Date().getFullYear()} Tous droits réservés
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
