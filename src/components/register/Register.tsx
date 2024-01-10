"use client";
import React, { useState } from "react";
import img1 from "../../assets/zyro-image(2).png";
import img2 from "../../assets/zyro-image(3).png";
import logo from "../../app/favicon.ico";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    rep_password: "",
  });
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
  return (
    <AnimatePresence>
      <div className="flex flex-row w-screen h-screen justify-end ">
        <div className="flex flex-col w-full h-full justify-center align-middle items-center z-0 absolute">
          <Image src={img1} layout="fill" objectFit="cover" alt="bg" />
        </div>
        <div className="flex flex-col w-1/2 justify-center align-middle items-center text-center bg-gradient-to-r from-transparent to-white to-50% z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center align-middle"
          >
            <Image src={logo} width={100} height={100} alt="logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center w-4/5 justify-center align-middle"
          >
            <div className="flex flex-col h-7/8 w-full p-12 m-16 justify-center align-middle opacity-80 text-center border-spacing-12 border-8 border-white rounded-lg bg-white shadow-2xl shadow-gray-500">
              <h1 className="text-lg font-semibold font-montserrat mb-4">
                REGISTRO
              </h1>
              <form
                onSubmit={onSubmit}
                className="flex flex-col w-full justify-center align-middle text-center gap-4"
              >
                <div className="flex flex-col justify-center align-middle text-start">
                  {/* <p>Nombre y apellido</p> */}
                  <input
                    value={formData.full_name}
                    name="full_name"
                    onChange={handleInput}
                    type="text"
                    placeholder="Nombre y apellido"
                    className="h-9 p-2 border border-gray-300 rounded-xl bg-gray-50 hover:bg-white focus:border-red-700"
                    // border-solid border-2
                  />
                </div>
                <div className="flex flex-col justify-center align-middle text-start">
                  {/* <p>Email</p> */}
                  <input
                    value={formData.email}
                    name="email"
                    onChange={handleInput}
                    placeholder="Email"
                    type="text"
                    className="h-9 p-2 border border-gray-300 rounded-xl bg-gray-50 hover:bg-white focus:border-red-700"
                  />
                </div>
                <div className="flex flex-col justify-center align-middle text-start">
                  {/* <p>Numero de teléfono</p> */}
                  <input
                    value={formData.phone_number}
                    name="phone_number"
                    onChange={handleInput}
                    placeholder="Número de teléfono"
                    type="text"
                    className="h-9 p-2 border border-gray-300 rounded-xl bg-gray-50 hover:bg-white focus:border-red-700"
                  />
                </div>
                <div className="flex flex-col justify-center align-middle text-start">
                  {/* <p>Contraseña</p> */}
                  <input
                    value={formData.password}
                    name="password"
                    onChange={handleInput}
                    placeholder="Contraseña"
                    type="text"
                    className="h-9 p-2 border border-gray-300 rounded-xl bg-gray-50 hover:bg-white focus:border-red-700"
                  />
                </div>
                <div className="flex flex-col justify-center align-middle text-start">
                  {/* <p>Repetir contraseña</p> */}
                  <input
                    value={formData.rep_password}
                    name="rep_password"
                    onChange={handleInput}
                    placeholder="Repetir contraseña"
                    type="text"
                    className="h-9 p-2 border border-gray-300 rounded-xl bg-gray-50 hover:bg-white focus:border-red-700"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md h-9 bg-red-700 text-white font-semibold"
                >
                  Registrarme
                </button>
                <hr className="w-full border-gray-300" />
                <div className="w-full gap-2 flex flex-col">
                  <p className="text-sm text-gray-500 font-montserrat">
                    ¿Ya tenes una cuenta?
                  </p>
                  <Link
                    href="/login"
                    className="w-full pt-1 text-center flex justify-center align-middle  rounded-md h-9 bg-white border-2 border-red-700 text-red-700 font-semibold hover:bg-red-700 hover:text-white"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Register;
