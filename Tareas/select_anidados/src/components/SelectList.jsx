import React from "react";

export const SelectList = ({ manejadorCambio, title, options }) => {
  return (
    <div>
      <label>{title}</label>
      <select onChange={manejadorCambio}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
