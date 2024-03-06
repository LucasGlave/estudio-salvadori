"use client";
import React, { useEffect, useRef, useState } from "react";
import sanLuis from "../../assets/san-luis.jpg";
import buenosAires from "../../assets/buenos-aires.jpg";
import neuquen from "../../assets/neuquen.jpg";
import cordoba from "../../assets/cordoba.jpg";
import laPampa from "../../assets/la-pampa.jpg";
import { useRouter } from "next/navigation";
import { motion, useAnimation, useInView } from "framer-motion";
import "@/styles/jurisdiction.css";

const Jurisdictions = () => {
  const router = useRouter();
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

  const handleProcedure = (jurisdiction: string) => {
    router.push(`/${jurisdiction}`);
  };
  return (
    <div className="flex flex-col w-full justify-evenly align-middle text-center items-center h-screen bg-white z-10 containerWithScroll">
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
        <hr className="w-2/6 border-gray-300 titleLine" />
        <h2 className="w-2/6 text-xl titleText">JURISDICCIONES</h2>
        <hr className="w-2/6 border-gray-300 titleLine" />
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
          className="flex flex-row w-full gap-4 px-60 jurisdictionsContainer"
        >
          <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card jurisdictionCard">
            <motion.img
              // layoutId="la-pampa"
              src={laPampa.src}
              alt="bsas"
              className="object-cover rounded-md h-full w-full"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2 buttonContainer">
              <h3>La Pampa</h3>
              <button
                onClick={() => handleProcedure("la-pampa")}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded consultButton"
              >
                Consultar
              </button>
            </div>
          </div>
          <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card jurisdictionCard">
            <motion.img
              layoutId="cordoba"
              src={cordoba.src}
              alt="bsas"
              className="object-cover rounded-md h-full w-full"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2 buttonContainer">
              <h3>Cordoba</h3>
              <button
                onClick={() => handleProcedure("cordoba")}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded consultButton"
              >
                Consultar
              </button>
            </div>
          </div>
          <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card jurisdictionCard">
            <motion.img
              layoutId="san-luis"
              src={sanLuis.src}
              className="object-cover rounded-md h-full w-full"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2 buttonContainer">
              <h3>San Luis</h3>
              <button
                onClick={() => handleProcedure("san-luis")}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded consultButton"
              >
                Consultar
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          layoutId="jurisdic"
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
          className="flex flex-row w-full justify-center gap-4 px-60 jurisdictionsContainer"
        >
          <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card jurisdictionCard">
            <motion.img
              layoutId="neuquen"
              src={neuquen.src}
              className="object-cover rounded-md h-full w-full"
            />
            <div
              onClick={() => handleProcedure("neuquen")}
              className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2 buttonContainer"
            >
              <h3>Neuquen</h3>
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded consultButton">
                Consultar
              </button>
            </div>
          </div>
          <div className="border border-gray-300 w-1/3 h-80 rounded-md relative overflow-hidden shadow-lg card jurisdictionCard">
            <motion.img
              layoutId="buenos-aires"
              src={buenosAires.src}
              className="object-cover rounded-md h-full w-full"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-transp p-4 gap-2 buttonContainer">
              <h3>Buenos Aires</h3>
              <button
                onClick={() => handleProcedure("buenos-aires")}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-4 rounded consultButton"
              >
                Consultar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Jurisdictions;
