import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../app/favicon.ico";



const Header = () => {
  return (
    <div className="flex justify-center h-2/6 p-7 bg-gradient-to-b from-gray-300 via-white via-10% to-transparent z-0">
        <div className="flex justify-between items-center align-middle w-3/4 font-montserrat font-semibold text-gray-500">
          <div className="flex flex-row w-1/3 justify-evenly">
            <h3>MI PERFIL</h3>
          </div>
          <div className="flex flex-row w-1/3 justify-evenly">
            <Image src={logo} width={100} height={100} alt="logo" />
          </div>
          <div className="flex flex-row w-1/3 justify-evenly">
            <h3>NUEVA CONSULTA</h3>
          </div>
        </div>
      </div>
  );
};

export default Header;
