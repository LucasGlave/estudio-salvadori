"use client";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [view, setView] = useState('none')
  const handleView = (screen: string) =>{
    view === screen ? setView('none') : setView(screen)
  }
  return (
      <div className="back-image flex flex-col gap-64 items-start justify-end w-full h-screen bg-no-repeat bg-bottom-left bg-cover bg-fixed z-0">
          <div className="flex items-start justify-end flex-col p-14">
            <h1 style={{fontSize:'3rem'}} className="font-bold text-red-700">ESTUDIO SALVADORI</h1>
            <h1 className="font-bold text-xl text-gray-600">DEFENDIENDO TUS DERECHOS CON COMPROMISO Y EXPERIENCIA.</h1>
            <div className="flex flex-row gap-5 mt-3">
              <button onClick={()=> handleView('nosotros')}
                className="text-gray-600 hover:text-zinc-200 font-semibold backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
                >
                NOSOTROS
              </button>
              <button onClick={()=> handleView('ubicacion')}
                className="text-gray-600 hover:text-zinc-200 font-semibold backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
              >
                UBICACION
              </button>
            </div>
          </div>
          <div className="w-full h-1/3">
            {view === 'nosotros' ? (
              <div className={`w-full h-full font-semibold bg-gradient-to-t from-transp from-70% to-transparent text-black flex items-center p-14`}>
                <h4>Mi nombre es <span>Alan Muñoz</span> y tengo 28 años. Soy un peluquero con experiencia y pasión por mi trabajo. Desde hace 9 años, he estado cortando el pelo en Darregueira, un pequeño pueblo de la provincia de Buenos Aires en Argentina.
                  Trabajar como peluquero en Darregueira me ha permitido conocer a muchas personas interesantes y variadas. Algunos son clientes habituales que vienen a verme cada mes para mantener su cabello en buena forma, mientras que otros son nuevos en la ciudad y buscan un lugar confiable para recibir un corte de pelo fresco y moderno.
                  La peluquería donde trabajo es más que un simple negocio para mí. Es un espacio donde puedo ejercer mi creatividad y habilidades para crear peinados y cortes personalizados para cada cliente. Me encanta hablar con mis clientes mientras les corto el pelo y conocer sus historias y experiencias de vida. Muchas veces, estas conversaciones se convierten en amistades duraderas.
                  Además de ser un peluquero en Darregueira, también he participado en eventos de moda y peluquería en toda la provincia, lo que me ha permitido expandir mis habilidades y mantenerme actualizado con las últimas tendencias y estilos.
                  Cortar el pelo es mi pasión y me enorgullece poder hacer mi trabajo con excelencia en Darregueira. No solo estoy agradecido por tener una clientela fiel, sino que también disfruto de la sensación de ser parte de una comunidad unida y amistosa. Espero seguir creciendo como peluquero y seguir cortando el pelo en Darregueira por muchos años más.
                </h4>
              </div>
            ) : view === 'ubicacion' ? (
              <div className={`w-full h-full font-semibold bg-gradient-to-t from-transp from-70% to-transparent text-black flex items-center p-14`}>
                <p>UBICACION</p>
              </div>
            ) : (
              <div className={`w-full h-full font-semibold bg-gradient-to-t from-transp from-70% to-transparent text-black flex items-center p-14`}>
              </div>
            )}
          </div>
            
      </div>
  );
};

export default HomePage;
