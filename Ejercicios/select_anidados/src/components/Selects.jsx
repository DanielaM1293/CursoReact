import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [ciudades, setCiudades] = useState(null);

  console.log('Departamento ID', departamentos);
  console.log('Municipio ID', municipios);

  useEffect(() => {
    if (municipios) {
      fetch(`https://api-colombia.com/api/v1/City/${municipios}`)
        .then((response) => response.json())
        .then((data) => setCiudades(data))
        .catch((error) => console.error("Error al traer información de la ciudad:", error));
    }
  }, [municipios]);

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          setMunicipios(event.target.value);
        }}
      />
      <SelectList
        title="Ciudades"
        url={`https://api-colombia.com/api/v1/City/${municipios}`}
      />
      
      {ciudades && (
        <div className="ciudad-info">
          <h3>Ciudad</h3>
          <p><em>Nombre:</em> {ciudades.name}</p>
          <p><em>Población:</em> {ciudades.population}</p>
          <p><em>Código Postal:</em> {ciudades.postalCode}</p>
        </div>
      )}
    </div>
  );
};

export default Selects;
