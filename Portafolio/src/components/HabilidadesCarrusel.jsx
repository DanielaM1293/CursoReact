// HabilidadesCarrusel.jsx
import React, { useEffect, useState } from "react";

const habilidadesGrupo1 = [
  { name: "Frontend", icon: "https://cdn-icons-png.flaticon.com/256/11494/11494248.png" },
  { name: "Redux", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gltPu8C7VFaLIEprGm9Vpms3NLxqQJX1Gw&s" },
  { name: "Tailwind", icon: "data:image/jpeg;base64,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" },
];

const habilidadesGrupo2 = [
  { name: "React", icon: "https://cdn-icons-png.freepik.com/256/10303/10303368.png?semt=ais_hybrid" },
  { name: "JavaScript", icon: "https://cdn-icons-png.freepik.com/256/15379/15379746.png?semt=ais_hybrid" },
  { name: "CSS", icon: "https://cdn-icons-png.freepik.com/256/14751/14751118.png?semt=ais_hybrid" },
];

const habilidadesGrupo3 = [
  { name: "HTML", icon: "https://cdn-icons-png.freepik.com/512/7404/7404512.png" },
  { name: "Microsoft Azure", icon: "https://cdn-icons-png.freepik.com/256/9811/9811562.png?semt=ais_hybrid" },
  { name: "PowerShell Hyper V", icon: "https://media.licdn.com/dms/image/D5612AQGO9vy_yC1lXg/article-cover_image-shrink_720_1280/0/1680367500829?e=2147483647&v=beta&t=5T05_FJyZv13MuWbsAKw4lDZM_-omCZv7qywNcaNjLo" },
];

const habilidadesGrupo4 = [
  { name: "Node.js", icon: "data:image/png;base64,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" },
  { name: "Git", icon: "https://cdn-icons-png.freepik.com/256/9443/9443946.png?semt=ais_hybrid" },
  { name: "SQL", icon: "https://cdn-icons-png.freepik.com/256/17544/17544595.png?semt=ais_hybrid" },
];

export const HabilidadesCarrusel = ({ habilidades }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % habilidades.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [habilidades.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % habilidades.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + habilidades.length) % habilidades.length);
  };

  return (
    <div
      className="relative overflow-hidden flex justify-center items-center border-4 border-purple-500 rounded-lg h-64 w-full"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {showControls && (
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-purple-500 text-white rounded-full p-2 hover:bg-purple-600 transition"
        >
          ◀
        </button>
      )}

      <div className="flex justify-center items-center w-full h-full">
        {habilidades.map((habilidad, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-700 ease-in-out ${
              index === activeIndex
                ? "scale-125 text-purple-600 brightness-150 translate-y-[-20px] drop-shadow-2xl"
                : "opacity-0"
            }`}
            style={{
              display: index === activeIndex ? "flex" : "none",
            }}
          >
            <div className="m-4 p-4"> {/* Aumento del margen y padding */}
              <img src={habilidad.icon} alt={habilidad.name} className="w-32 h-32 mx-auto" />
            </div>
            <span className="font-semibold text-xl">{habilidad.name}</span>
          </div>
        ))}
      </div>

      {showControls && (
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-purple-500 text-white rounded-full p-2 hover:bg-purple-600 transition"
        >
          ▶
        </button>
      )}
    </div>
  );
};

const CarruselPrincipal = () => {
  return (
    <div className="bg-black p-8 rounded-lg">
      <h2 className="text-4xl font-semibold text-purple-300 text-center mb-10">
      
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HabilidadesCarrusel habilidades={habilidadesGrupo1} />
        <HabilidadesCarrusel habilidades={habilidadesGrupo2} />
        <HabilidadesCarrusel habilidades={habilidadesGrupo3} />
        <HabilidadesCarrusel habilidades={habilidadesGrupo4} />
      </div>
    </div>
  );
};

export default CarruselPrincipal;
