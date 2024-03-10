'use client'
import React, { useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import "@/styles/myAccount.css"

const MyAccount = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    rep_password: "",
    localidad: "",
    city: "",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex items-center w-3/5 justify-center align-middle"
    >
      <div className="flex flex-col h-7/8 w-full justify-center align-middle p-8 text-center border-spacing-12 border-8 border-white rounded-lg bg-white shadow-2xl shadow-gray-500 formContainer">
        <h2 className="text-xl font-montserrat mb-6 text-gray-500 font-bold">
          MI PERFIL
        </h2>
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
              className="h-9 p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:border-red-700"
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
              className="h-9 p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:border-red-700"
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
              className="h-9 p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:border-red-700"
            />
          </div>
          <div className="flex flex-col justify-center align-middle text-start">
            {/* <p>Numero de teléfono</p> */}
            <input
              value={formData.localidad}
              name="localidad"
              onChange={handleInput}
              placeholder="Localidad"
              type="text"
              className="h-9 p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:border-red-700"
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
              className="h-9 p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:border-red-700"
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
              className="h-9 p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:border-red-700"
            />
          </div>
          
          <button
            type="submit"
            className="rounded-md h-9 bg-red-700 text-white font-semibold"
          >
            Guardar cambios
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default MyAccount;
