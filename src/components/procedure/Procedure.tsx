"use client";
import React, { ChangeEvent, useState } from "react";
import logo from "../../app/favicon.ico";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import InputFile from "./InputFile";

const Procedure = () => {
  const params = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState<string>("");
  const [select, setSelect] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(e.target.value);
  };
  const selectCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelect(e.currentTarget.value);
  };

  const imagePath = require(`../../assets/${params.procedure}.jpg`);
  const arrayJurisdiction = [
    "buenos-aires",
    "neuquen",
    "san-luis",
    "cordoba",
    "la-pampa",
  ];
  const layId =
    params.procedure && arrayJurisdiction.includes(`${params.procedure}`)
      ? params.procedure
      : "";
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col w-screen h-screen justify-end">
        <div
          className="w-full h-screen absolute bg-white opacity-50"
          // style={{ filter: "grayscale(80%)" }}
        >
          <motion.img
            // layoutId={`${layId}`}
            src={imagePath.default.src}
            className="object-cover w-screen h-screen"
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(3px)" }}
            transition={{ duration: 0.6 }}
            alt="bg"
          />
        </div>
        {/* <Header/> */}

        <div className="flex flex-col w-full h-full justify-center align-middle items-center text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.6 }}
            className="flex items-center w-1/2 justify-center align-middle"
          >
            <div className="flex flex-col h-7/8 w-full p-12 m-16 justify-center align-middle text-center border-spacing-12 border-8 border-white rounded-lg bg-white shadow-2xl shadow-gray-500">
              <div className="flex items-center mb-8 justify-center align-middle">
                <Image src={logo} width={100} height={100} alt="logo" />
              </div>
              <div className="flex flex-col mb-6">
                <h1 className="font-semibold text-2xl font-montserrat">
                  CONSULTA
                </h1>
              </div>
              <p className="text-center text-gray-500 mb-2">
                Seleccione tipo de tramite
              </p>
              <div className="flex flex-row w-full h-20 gap-2 font-semibold">
                <button
                  value={"juicio"}
                  onClick={selectCard}
                  className={`flex items-center justify-center select-card w-1/3 h-full  border rounded-lg bg-gray-50 cursor-pointer  ${
                    select != "juicio"
                      ? "border-gray-400 text-black"
                      : "bg-gradient-to-b from-red-700 from-50% to-red-900 text-white"
                  }`}
                  // hover:bg-white
                >
                  JUICIO
                </button>
                <button
                  value={"diligencia"}
                  onClick={selectCard}
                  className={`flex items-center justify-center select-card w-1/3 h-full border rounded-lg bg-gray-50 cursor-pointer ${
                    select != "diligencia"
                      ? "border-gray-400 text-black"
                      : "bg-gradient-to-b from-red-700 from-50% to-red-900 text-white"
                  }`}
                >
                  DILIGENCIA
                </button>
                <button
                  value={"none"}
                  onClick={selectCard}
                  className={`flex items-center justify-center select-card w-1/3 h-full border rounded-lg bg-gray-50 cursor-pointer ${
                    select != "none"
                      ? "border-gray-400 text-black"
                      : "bg-gradient-to-b from-red-700 from-50% to-red-900 text-white"
                  }`}
                >
                  SUCESION
                </button>
              </div>
              <form onSubmit={onSubmit}>
                <textarea
                  className="min-h-40 max-h-40 my-2 p-2 w-full bg-gray-50 border border-gray-300 rounded-md"
                  value={formData}
                  onChange={handleInput}
                ></textarea>
                <InputFile />
                <p className="text-gray-500 mt-8">
                  La consulta se enviará al mail y se le contestará lo antes
                  posible.
                </p>
                <button
                  type="submit"
                  className="rounded-md mt-4 h-9 w-40 bg-red-700 text-white font-semibold"
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Procedure;
