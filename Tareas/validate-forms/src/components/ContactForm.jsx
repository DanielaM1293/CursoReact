import React from "react";
import { useForms } from "../hooks/useForms";

const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

const validaciones = (form) => {
  const regexEmail = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;
  const regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El nombre es obligatorio";
  }
  if (!form.email.trim()) {
    errorsFormulario.email = "El email es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email = "El campo no tiene el formato de un correo electrónico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El asunto es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "Las observaciones son obligatorias";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones = "El campo debe tener mínimo un carácter y máximo 255 caracteres";
  }

  return errorsFormulario;
};

export const ContactForm = () => {
  const { form, errores, setErrores, ManejadorCambios, manejadorSalidaInput } =
    useForms(valorDefecto, validaciones);

  const enviarFormulario = (e) => {
    e.preventDefault();
    const erroresForm = validaciones(form);
    setErrores(erroresForm); // Aquí se actualizan los errores
    if (Object.keys(erroresForm).length === 0) {
      console.log("Formulario enviado", form);
      // Lógica de envío del formulario (API, etc.)
    } else {
      console.log("Errores en el formulario", erroresForm);
    }
  };

  return (
    <div>
      <h1>Formulario de contacto</h1>
      <form onSubmit={enviarFormulario}>
        <p>Nombre</p>
        <input
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre"
          required
          value={form.nombre}
          onChange={ManejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.nombre && <p className="p-error">{errores.nombre}</p>}

        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          required
          value={form.email}
          onChange={ManejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.email && <p className="p-error">{errores.email}</p>}

        <p>Asunto</p>
        <input
          type="text"
          name="asunto"
          placeholder="Asunto"
          required
          value={form.asunto}
          onChange={ManejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.asunto && <p className="p-error">{errores.asunto}</p>}

        <p>Observaciones</p>
        <textarea
          name="observaciones"
          placeholder="Escribe tus observaciones"
          required
          cols={50}
          rows={5}
          value={form.observaciones}
          onChange={ManejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {errores.observaciones && <p className="p-error">{errores.observaciones}</p>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
