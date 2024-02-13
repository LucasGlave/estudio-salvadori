import Image from "next/image";
import React from "react";
import logo from "../app/favicon.ico";

const Footer = () => {
  return (
    <footer className="text-white z-10">
      <div className="md:flex flex-col md:justify-between md:items-center sm:px-12 px-6 bg-gradient-to-b from-transparent to-stone-600 opacity-90 z-20 py-7">
        <div className="flex items-center justify-center">
          <Image src={logo} width={100} height={100} alt="logo" />
        </div>
        <p className="text-xl text-center md:mb-0 mb-6 lg:leading-normal font-bold">
          ESTUDIO SALVADORI
        </p>
        <p className="text-xl text-center md:mb-0 mb-6 lg:leading-normal font-light">
          estudiosalvadori@gmail.com
        </p>
      </div>
      {/* <ItemsContainer /> */}
      <div
        className="flex flex-col bg-stone-600 opacity-90 justify-center gap-8
        text-center items-center text-sm p-5 w-full"
      >
        <div className="flex flex-row gap-2 w-1/3 justify-center items-center font-montserrat font-semibold">
          <div className="w-1/3">
            <h3>MI PERFIL</h3>
          </div>
          <div className="w-1/3">
            <h3>NUEVA CONSULTA</h3>
          </div>
          <div className="w-1/3">
            <h3>NOSOTROS</h3>
          </div>
        </div>
        <div
          className="flex flex-row w-1/2 justify-center items-center"
        >
          <div className="w-1/3 flex justify-center">
            <span>Software Develop</span>
          </div>
          <div className="rounded-full bg-white w-1 h-1 flex items-center justify-center" />
          <div className="w-1/3">
            <span>Lucas Glave</span>
          </div>
          <div className="rounded-full bg-white w-1 h-1 flex items-center justify-center" />
          <div className="w-1/3 flex items-center justify-center">
            <span>lucasglave@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
