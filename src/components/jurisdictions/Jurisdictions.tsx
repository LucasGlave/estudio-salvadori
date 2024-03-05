'use client';
import React, { useEffect, useRef, useState } from 'react';
import sanLuis from '../../assets/san-luis.jpg';
import buenosAires from '../../assets/buenos-aires.jpg';
import neuquen from '../../assets/neuquen.jpg';
import cordoba from '../../assets/cordoba.jpg';
import laPampa from '../../assets/la-pampa.jpg';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Reveal from '@/Reveal';

const Jurisdictions = () => {
  const router = useRouter();
  const handleProcedure = (jurisdiction: string) => {
    router.push(`/${jurisdiction}`);
  };
  return (
    <div className="flex flex-col w-full justify-evenly align-middle text-center items-center h-full min-h-screen bg-white z-20">
      <Reveal>
        <div className="flex flex-row h-1/8 items-center font-montserrat text-gray-500 font-bold w-full py-14">
          <hr className="w-2/6 border-gray-300" />
          <h2 className="w-2/6 text-xl">JURISDICCIONES</h2>
          <hr className="w-2/6 border-gray-300" />
        </div>
      </Reveal>
      <div className="flex flex-wrap w-full justify-center items-center gap-4 px-[10%]">
        <div className="flex-grow basis-96 w-1/3">
          <Reveal>
            <div className="border border-gray-300 flex-grow basis-48 w-full h-72 rounded-md relative overflow-hidden shadow-lg card">
              <motion.img
                src={laPampa.src}
                alt="bsas"
                className="object-cover rounded-md h-full w-full"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>La Pampa</h3>
                <button
                  onClick={() => handleProcedure('la-pampa')}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded"
                >
                  Consultar
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex-grow basis-96 w-1/3">
          <Reveal>
            <div className="border border-gray-300 flex-grow basis-48 w-full h-72 rounded-md relative overflow-hidden shadow-lg card">
              <motion.img
                src={cordoba.src}
                alt="bsas"
                className="object-cover rounded-md h-full w-full"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>Cordoba</h3>
                <button
                  onClick={() => handleProcedure('cordoba')}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded"
                >
                  Consultar
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex-grow basis-96 w-1/3">
          <Reveal>
            <div className="border border-gray-300 flex-grow basis-48 w-full h-72 rounded-md relative overflow-hidden shadow-lg card">
              <motion.img src={sanLuis.src} className="object-cover rounded-md h-full w-full" />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>San Luis</h3>
                <button
                  onClick={() => handleProcedure('san-luis')}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded"
                >
                  Consultar
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex-grow basis-96 max-w-[650]">
          <Reveal>
            <div className="border border-gray-300 flex-grow basis-48 w-full h-72 rounded-md relative overflow-hidden shadow-lg card">
              <motion.img src={neuquen.src} className="object-cover rounded-md h-full w-full" />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>Neuquen</h3>
                <button
                  onClick={() => handleProcedure('neuquen')}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded"
                >
                  Consultar
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex-grow basis-96 w-1/3">
          <Reveal>
            <div className="border border-gray-300 flex-grow basis-48 w-full h-72 rounded-md relative overflow-hidden shadow-lg card">
              <motion.img src={buenosAires.src} className="object-cover rounded-md h-full w-full" />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>Buenos Aires</h3>
                <button
                  onClick={() => handleProcedure('buenos-aires')}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded"
                >
                  Consultar
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex-grow basis-96 max-w-[650]">
          <Reveal>
            <div className="border border-gray-300 flex-grow basis-48 w-full h-72 rounded-md relative overflow-hidden shadow-lg card">
              <motion.img src={buenosAires.src} className="object-cover rounded-md h-full w-full" />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>Chubut</h3>
                <button
                  onClick={() => handleProcedure('buenos-aires')}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded"
                >
                  Consultar
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Jurisdictions;
