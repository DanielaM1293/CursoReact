import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { Acerca, Error404, Home, Productos, Servicios, ProductoDetalle } from "./pages"; // Ensure ProductoDetalle is imported
import "./App.css";
import { useState } from "react";

function App() {
  const [productos,setProductos]= useState([
    {
      id:1,
      nombre:"Hora de aventura",
      canal: "Cartoon"
    },
    {
      id:2,
      nombre:"Un show mas",
      canal: "Cartoon"
    },
    {
      id:3,
      nombre:"El maravilloso mundo de Gumbal",
      canal: "Cartoon"
    },



  ])

  return (
    <>
      <BrowserRouter>
        <h1>Hola Mundo React Router Dom</h1>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/productos" element={<Productos productos={productos} />} />
          <Route path="/productos/:id" element={<ProductoDetalle productos={productos} />} /> 
          <Route path="/servicios" element={<Servicios />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
