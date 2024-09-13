import "./App.css";
import { Selects } from "./components/Selects";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("valor original");
  console.log(text);

  return (
    <>
      <nav>
        <h1 className="h1-select">Aprendizaje React</h1>
      </nav>
      <p>Selects anidados</p>
      <hr />
      <input
        type="text"
        placeholder="escribe aqui"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      {text}
      <div className="container-select">
        <Selects />
      </div>
    </>
  );
};

export default App;
