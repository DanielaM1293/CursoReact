import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Acerca, Error404, Home, Servicios } from "./Pages";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
      <h1 className="text-3xl font-bold underline">
      Hola! Soy Estefany
    </h1>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/acerca" element={<Acerca/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
