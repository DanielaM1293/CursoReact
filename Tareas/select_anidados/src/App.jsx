import React from "react";
import { SelectList } from "./components/SelectList";

const App = () => {
  const handleSelectChange = (event) => {
    console.log("Selected value:", event.target.value);
  };

  const options = [
    { value: "opcion1", label: "Opción 1" },
    { value: "opcion2", label: "Opción 2" },
    { value: "opcion3", label: "Opción 3" },
  ];

  return (
    <div>
      <h1>Selecciona una opción</h1>
      <SelectList
        manejadorCambio={handleSelectChange}
        title="Selecciona:"
        options={options}
      />
    </div>
  );
};

export default App;
