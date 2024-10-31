import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o Nombre */}
        <div className="text-2xl font-bold text-purple-500">
          <Link to="/" className="hover:text-purple-300 transition-colors duration-300">
            Mi Portafolio
          </Link>
        </div>

        {/* Botón para menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="block w-6 h-1 bg-purple-500 mb-1"></span>
            <span className="block w-6 h-1 bg-purple-500 mb-1"></span>
            <span className="block w-6 h-1 bg-purple-500"></span>
          </button>
        </div>

        {/* Links de navegación para pantallas grandes */}
        <div className="hidden md:flex space-x-8 text-lg">
          {["/", "/acerca", "/servicios"].map((path, index) => {
            const isActive = location.pathname === path;
            const linkClasses = `relative ${isActive ? "text-purple-300" : "hover:text-purple-300"} transition-colors duration-300`;

            return (
              <Link key={index} to={path} className={linkClasses}>
                {path === "/" ? "Inicio" : path === "/acerca" ? "Acerca de mí" : "Servicios"}
                {isActive && <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-300 transition-all duration-300"></span>}
              </Link>
            );
          })}
        </div>

        {/* Botón para conectar */}
        <div>
          <a
            href="https://www.linkedin.com/in/estefany-daniela-martínez-niño-b0832b209"
            className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-transform transform hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto 
          </a>
        </div>
      </div>

      {/* Menú móvil (solo visible en pantallas pequeñas) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 mt-2 rounded-lg shadow-lg">
          {["/", "/acerca", "/servicios"].map((path, index) => {
            const isActive = location.pathname === path;
            const linkClasses = `block py-2 px-4 hover:text-purple-300 transition-colors duration-300 ${isActive ? "text-purple-300" : ""}`;

            return (
              <Link key={index} to={path} className={linkClasses} onClick={toggleMenu}>
                {path === "/" ? "Inicio" : path === "/acerca" ? "Acerca de mí" : "Servicios"}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Menu;
