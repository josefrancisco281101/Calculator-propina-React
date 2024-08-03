import React from "react";

export default function LabelItem({
  lab,
  id,
  clase,
  tipo,
  valor,
  min,
  placeholder,
  onChange,
}) {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  return (
    <label htmlFor={lab}>
      <input
        id={id}
        className={clase}
        type={tipo}
        value={valor}
        min={min}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}
