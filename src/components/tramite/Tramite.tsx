"use client";
import React, { useState } from "react";
import img1 from "../../assets/zyro-image(2).png";
import img2 from "../../assets/zyro-image(3).png";
import logo from "../../app/favicon.ico";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Tramite = () => {
  const params = useParams();
  // console.log(params);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [select, setSelect] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((previous) => {
      return { ...previous, [name]: value };
    });
  };
  const selectCard = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    // setSelect(e)
  };
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col w-screen h-screen justify-end">
        <div
          className="w-full h-screen absolute"
          style={{ filter: "blur(3px)" }}
        >
          <Image src={img2} layout="fill" className="object-cover" alt="bg" />
        </div>
        <div className="flex flex-col w-full h-full justify-center opacity-90 align-middle items-center text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center w-1/2 justify-center align-middle"
          >
            <div className="flex flex-col h-7/8 w-full p-12 m-16 justify-center align-middle text-center border-spacing-12 border-8 border-white rounded-lg bg-white shadow-2xl shadow-gray-500">
              <div className="flex flex-col mb-8">
                <h1 className="text-lg font-semibold font-montserrat">
                  CONSULTA
                </h1>
                <p className="text-gray-500 text-sm">
                  La consulta se enviará al mail y se le contestará lo antes
                  posible.
                </p>
              </div>

              <form
                onSubmit={onSubmit}
                className="flex flex-col justify-center align-middle text-center gap-4"
              >
                <div className="flex flex-row w-full h-20 gap-2">
                  <input
                    type="checkbox"
                    value={"juicio"}
                    onClick={selectCard}
                    className="flex items-center justify-center select-card w-1/3 h-full border-black border rounded-lg bg-gray-50 cursor-pointer hover:bg-white"
                  >
                    <label>JUICIO</label>
                  </input>
                  <input
                    type="checkbox"
                    value={"diligencia"}
                    onClick={selectCard}
                    className="flex items-center justify-center select-card w-1/3 h-full border-black border rounded-lg bg-gray-50 cursor-pointer hover:bg-white"
                  >
                    DILIGENCIA
                  </input>
                  <input
                    type="checkbox"
                    value={"none"}
                    onClick={selectCard}
                    className="flex items-center justify-center select-card w-1/3 h-full border-black border rounded-lg bg-gray-50 cursor-pointer hover:bg-white"
                  >
                    NONE
                  </input>
                </div>

                <textarea
                  className="resize-y max-h-96 min-h-20 mt-2 p-2 w-full bg-gray-50 border border-gray-300 rounded-md"
                  name="password"
                  id="bio"
                ></textarea>
                <button
                  type="submit"
                  className="rounded-md h-9 bg-red-700 text-white font-semibold"
                >
                  Enviar consulta
                </button>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3 }}
                  className="flex items-center mt-5 justify-center align-middle"
                >
                  <Image src={logo} width={70} height={70} alt="logo" />
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Tramite;
