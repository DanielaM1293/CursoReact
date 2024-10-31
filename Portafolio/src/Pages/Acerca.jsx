import React from "react";
import HabilidadesCarrusel from "../components/HabilidadesCarrusel";
import Burbujas from "../components/Burbujas";

export const Acerca = () => {
  const profileImage = "https://images-assets.nasa.gov/image/PIA09579/PIA09579~medium.jpg";
  

  return (
<>
    
    <div className="min-h-screen bg-black text-white p-6 mb-20">
      
      {/* Sección de Presentación */}
      <div className="flex flex-col items-center mb-20 mt-16">
        <img 
          src={profileImage} 
          alt="Perfil" 
          className="w-48 h-48 rounded-full shadow-lg mb-6 border-4 border-purple-500"
        />
        <h1 className="text-5xl font-bold text-purple-500 mb-4 text-center animate__animated animate__fadeInDown">
          ¡Hola! Soy Daniela
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl">
          Soy una programadora junior frontend apasionada, con un fuerte enfoque en el desarrollo de software. Siempre estoy buscando nuevos desafíos para resolver y avanzar en mi carrera. Mi experiencia abarca <strong>React ,Redux , Tailwind , Microsoft Azure, PowerShell, Hyper-V, Excel, SQL</strong> y más. ¡Resolver problemas es mi pasión y nada me detiene!
        </p>
      </div>

      {/* Sección de Objetivos */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-purple-400 mb-8 animate__animated animate__fadeInDown">
          Mis Objetivos
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <p className="text-lg text-gray-400">
            Mi objetivo es continuar creciendo profesionalmente en el mundo de la tecnología. Soy resiliente y me encanta enfrentar problemas complejos. Estoy comprometida con el aprendizaje constante, siempre buscando nuevos proyectos donde pueda aportar mis habilidades y seguir desarrollándome.
          </p>
        </div>
      </div>
{/* Sección de Habilidades */}
<div className="text-center mb-16">
  <h2 className="text-4xl font-semibold mb-8 animate__animated animate__fadeInDown 
                text-transparent bg-gradient-to-r from-purple-400 to-blue-500 
                bg-clip-text shadow-lg shadow-purple-500/50
                hover:shadow-xl hover:shadow-purple-600 transition-shadow duration-300">
    Habilidades
  </h2>
  <HabilidadesCarrusel />
</div>



      {/* Sección de Cursos (Cisco) */}
      <div className="text-center mb-16">
  <h2 className="text-4xl font-semibold text-purple-400 mb-8 animate__animated animate__fadeInDown">
    Cursos de Cisco
  </h2>
  <div className="flex justify-center flex-wrap gap-6">
    <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-purple-700">
      <h3 className="text-2xl text-purple-300 mb-4">Redes</h3>
      <p className="text-gray-400">
        Curso especializado en diseño, implementación y mantenimiento de redes.
      </p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-purple-700">
      <h3 className="text-2xl text-purple-300 mb-4">Ciberseguridad</h3>
      <p className="text-gray-400">
        Curso centrado en técnicas y herramientas para proteger infraestructuras tecnológicas.
      </p>
    </div>
  </div>
</div>


      {/* Sección de Contacto */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-semibold text-purple-400 mb-6 animate__animated animate__fadeInDown">
          Contáctame
        </h2>
        <div className="flex justify-center space-x-6">
          <a href="mailto:estdanielamartinez@gmail.com"
            className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-transform transform hover:scale-110 duration-300">
            Email
          </a>
          <a href="https://linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-transform transform hover:scale-110 duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-transform transform hover:scale-110 duration-300">
            GitHub
          </a>
        </div>
      </div>
      <Burbujas />
      <div className="relative z-10">
        </div> {/* Agrega z-10 para que el contenido esté por encima de las burbujas */}
    </div>
   
    </>
  );
};

export default Acerca;
