import React from "react";
import LabelItem from "./LabelItem";

export const initialLabels = [
  {
    lab: "Bill",
    id: "input-bill",
    clase: "input-bill",
    tipo: "number",
    valor: "",
    min: 0,
    placeholder: "0",
  },
  {
    lab: "Number of People",
    id: "input-people",
    clase: "input-people",
    tipo: "number",
    valor: "",
    min: 1,
    placeholder: "1",
  },
  {
    lab: "Custom Percentage",
    id: "custom-percentage",
    clase: "percentage-button",
    tipo: "number",
    valor: "",
    min: 0,
    placeholder: "Custom",
  },
];
export default function Label({ labels, onChange }) {
  return (
    <div>
      {labels.map((label) => (
        <LabelItem
          key={label.id}
          lab={label.lab}
          id={label.id}
          clase={label.clase}
          tipo={label.tipo}
          valor={label.valor}
          min={label.min}
          placeholder={label.placeholder}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
