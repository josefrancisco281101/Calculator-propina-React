import React from "react";

export default function TipItem({ id, value, value2, onTipSelect, selected }) {
  const handleClick = () => {
    onTipSelect(id);
  };

  return (
    <li id={id}>
      <button
        type="button"
        className={`percentage-button ${selected ? "active" : ""}`}
        value={value}
        onClick={handleClick}
      >
        {value2}
      </button>
    </li>
  );
}
