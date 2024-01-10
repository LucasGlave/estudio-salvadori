"use client";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/zyro-image(2).png";
import img2 from "../../assets/wesley-tingey-KJgkqQcdynQ-unsplash.jpg";
import bsas from "../../assets/buenos-aires.webp";
import bsas2 from "../../assets/buenosaires.jpg";
import neuquen from "../../assets/neuquen.jpg";
import cordoba from "../../assets/cordoba.jpg";
import laPampa from "../../assets/santa-rosa.jpg";
import logo from "../../app/favicon.ico";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

const HomePage = () => {
  const animationControls1 = useAnimation();
  const ref1 = useRef(null);
  const inView1 = useInView(ref1);
  const animationControls2 = useAnimation();
  const ref2 = useRef(null);
  const inView2 = useInView(ref2);
  const animationControls3 = useAnimation();
  const ref3 = useRef(null);
  const inView3 = useInView(ref3);
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const [hasAnimated2, setHasAnimated2] = useState(false);
  const [hasAnimated3, setHasAnimated3] = useState(false);
  useEffect(() => {
    if (inView1 && !hasAnimated1) {
      animationControls1.start("visible");
      setHasAnimated1(true);
    }
    if (inView2 && !hasAnimated2) {
      animationControls2.start("visible");
      setHasAnimated2(true);
    }
    if (!inView2 && hasAnimated2) {
      animationControls2.start("hidden");
      setHasAnimated2(false);
    }
    if (inView3 && !hasAnimated3) {
      animationControls3.start("visible");
      setHasAnimated3(true);
    }
    if (!inView3 && hasAnimated3) {
      animationControls3.start("hidden");
      setHasAnimated3(false);
    }
  }, [
    animationControls1,
    inView1,
    hasAnimated1,
    animationControls2,
    inView2,
    hasAnimated2,
    animationControls3,
    inView3,
    hasAnimated3,
  ]);
  return (
    <div className="flex flex-col w-full justify-center align-middle">
      <div className="flex justify-center h-2/6 p-10 bg-gradient-to-b from-gray-300 via-white via-35% to-gray-300 z-10">
        <div className="flex justify-between items-center align-middle w-3/4 font-montserrat font-semibold text-gray-500">
          <div className="flex flex-row w-1/3 justify-evenly">
            <h3>MI PERFIL</h3>
            <h3>MIS CONSULTAS</h3>
          </div>
          <div className="flex flex-row w-1/3 justify-evenly">
            <Image src={logo} width={100} height={100} alt="logo" />
          </div>
          <div className="flex flex-row w-1/3 justify-evenly">
            <h3>CONTACTO</h3>
            <h3>NUEVA CONSULTA</h3>
          </div>
        </div>
      </div>
      <div className="back-image w-full h-screen bg-no-repeat bg-bottom-left bg-cover z-0"></div>
      <div className="flex flex-col w-full justify-evenly align-middle text-center items-center h-screen bg-white z-10">
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          animate={animationControls1}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, delay: 0.3 },
            },
            hidden: { opacity: 0, y: 100 },
          }}
          ref={ref1 as any}
          className="flex flex-row h-1/8 items-center font-montserrat text-gray-500 font-bold w-full px-60"
        >
          <hr className="w-2/6 border-gray-300" />
          <h2 className="w-2/6">JURISDICCIONES</h2>
          <hr className="w-2/6 border-gray-300" />
        </motion.div>
        <div className="flex flex-col w-full h-7/8 justify-center items-center gap-4">
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            animate={animationControls2}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, delay: 0.3 },
              },
              hidden: { opacity: 0, y: 100 },
            }}
            ref={ref2 as any}
            className="flex flex-row w-full gap-4 px-60"
          >
            <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card">
              <Image
                src={laPampa}
                alt="bsas"
                className="object-cover rounded-md"
                layout="fill"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>La Pampa</h3>
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded">
                  Consultar
                </button>
              </div>
            </div>
            <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card">
              <Image
                src={cordoba}
                alt="bsas"
                className="object-cover rounded-md"
                layout="fill"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>Cordoba</h3>
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded">
                  Consultar
                </button>
              </div>
            </div>
            <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card">
              <Image
                src={bsas}
                alt="bsas"
                className="object-cover rounded-md"
                layout="fill"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>San Luis</h3>
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded">
                  Consultar
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            animate={animationControls3}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, delay: 0.3 },
              },
              hidden: { opacity: 0, y: 100 },
            }}
            ref={ref3 as any}
            className="flex flex-row w-full justify-center gap-4 px-60"
          >
            <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card">
              <Image
                src={neuquen}
                alt="neuquen"
                className="object-cover rounded-md"
                layout="fill"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>Neuquen</h3>
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded">
                  Consultar
                </button>
              </div>
            </div>
            <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card">
              <Image
                src={bsas2}
                alt="bsas"
                className="object-cover rounded-md"
                layout="fill"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2">
                <h3>Buenos Aires</h3>
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded">
                  Consultar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center h-2/6 p-10 bg-gradient-to-b from-gray-300 via-white via-35% to-gray-300 z-10">
        <div className="flex justify-center items-center align-middle w-1/2 font-montserrat font-semibold text-gray-500">
          <div className="flex flex-row w-1/3 justify-evenly">
            <h3>Contacto</h3>
            <h3>Consulta</h3>
          </div>
          <div className="flex flex-row w-1/3 justify-evenly">
            <Image src={logo} width={100} height={100} alt="logo" />
          </div>
          <div className="flex flex-row w-1/3 justify-evenly">
            <h3>Contacto</h3>
            <h3>Tipo de tramite</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
