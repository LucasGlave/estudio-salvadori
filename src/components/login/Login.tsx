'use client';
import React, { useState } from 'react';
import img1 from '../../assets/zyro-image(2).png';
import img2 from '../../assets/zyro-image(3).png';
import logo from '../../app/favicon.ico';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    router.push('/')
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((previous) => {
      return { ...previous, [name]: value };
    });
  };
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-row w-screen h-screen justify-end">
        <div className="flex flex-col w-full h-full justify-center align-middle items-center z-0 absolute">
          <Image src={img1} fill objectFit="cover" alt="bg" />
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
            <div className="flex flex-col h-7/8 w-full p-12 m-16 justify-center align-middle opacity-90 text-center border-spacing-12 border-8 border-white rounded-lg bg-white shadow-2xl shadow-gray-500">
              <h1 className="text-lg font-semibold font-montserrat mb-4">INICIO DE SESION</h1>
              <form
                onSubmit={onSubmit}
                className="flex flex-col justify-center align-middle text-center gap-4"
              >
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
                  {/* <p>Contraseña</p> */}
                  <input
                    value={formData.password}
                    name="password"
                    onChange={handleInput}
                    placeholder="Contraseña"
                    type="password"
                    className="h-9 p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:border-red-700"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md h-9 bg-red-700 text-white font-semibold"
                >
                  Iniciar sesión
                </button>
                <hr className="w-full border-gray-300" />
                <div className="w-full gap-2 flex flex-col">
                  <p className="text-sm text-gray-500 font-montserrat">¿No tenes una cuenta?</p>
                  <Link
                    href="/register"
                    className="w-full pt-1 rounded-md h-9 bg-white border-2 border-red-700 text-red-700 font-semibold hover:bg-red-700 hover:text-white"
                  >
                    Registrar
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

export default Login;
