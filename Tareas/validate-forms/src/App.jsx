import { useState } from 'react';
import './App.css';
import { ContactForm } from './components/ContactForm';
import { Loader } from './components/Loader'; // Asegúrate de que Loader está importado correctamente

function App() {
  const [loading, setLoading] = useState(false);

  // Simulación del envío del formulario
  const enviarFormulario = (form) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Formulario enviado con éxito", form);
      setLoading(false);
    }, 2000); // Simula una petición de 2 segundos
  };

  return (
    <>
      <h1>Validate Forms</h1>
      <div className="card">
        <ContactForm onSubmit={enviarFormulario} />
        {loading && <Loader />}
      </div>
    </>
  );
}

export default App;
