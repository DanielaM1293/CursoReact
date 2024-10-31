// Burbujas.jsx
import React from "react";

export const Burbujas = () => {
  const burbujas = Array.from({ length: 20 }); // Cambia la cantidad para más o menos burbujas

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {burbujas.map((_, index) => (
        <div
          key={index}
          className="bubble bg-purple-500 rounded-full opacity-80 shadow-lg"
          style={{
            left: `${Math.random() * 100}vw`, // Posición horizontal aleatoria
            animationDuration: `${Math.random() * 3 + 2}s`, // Duración entre 2 y 5 segundos
            width: `${Math.random() * 20 + 30}px`, // Tamaño aleatorio entre 30px y 50px
            height: `${Math.random() * 20 + 30}px`, // Tamaño aleatorio entre 30px y 50px
            bottom: `-${Math.random() * 50}px`, // Para que comiencen desde un lugar debajo de la vista
          }}
        />
      ))}
    </div>
  );
};

export default Burbujas;
