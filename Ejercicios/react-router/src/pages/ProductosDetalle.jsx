import { useParams ,useNavigate} from "react-router-dom";

export const ProductosDetalle = ({ productos }) => {
    const navegador = useNavigate();
  const { id } = useParams();
  const infoProductos = productos.find(
    (producto) => productos.id.toString() === id
  );
   
const funcionNavegar =() =>{
navegador(-1)
};

  return <section>
    <h1>Detalle del Programa </h1>
    <h2>Programa: {infoProductos.nombre}</h2>
    <h3>Canal: {infoProductos.canal}</h3>

  </section>;
};