import { useState, useEffect } from "react";

export const useForms = (valorDefecto, validaciones) => {
  const [form, setForm] = useState(valorDefecto);
  const [errores, setErrores] = useState({});

  const ManejadorCambios = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const manejadorSalidaInput = (e) => {
    const { name, value } = e.target;
    const resultadoErrores = validaciones({ ...form, [name]: value });
    setErrores((prevErrores) => ({
      ...prevErrores,
      [name]: resultadoErrores[name],
    }));
  };

  useEffect(() => {
    if (Object.keys(form).some((key) => form[key].trim() !== "")) {
      setErrores(validaciones(form));
    }
  }, [form, validaciones]);

  return { form, errores, setErrores, ManejadorCambios, manejadorSalidaInput };
};
