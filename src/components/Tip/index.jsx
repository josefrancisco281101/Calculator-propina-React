import React from "react";
import TipItem from "./TipItem";

export const initialTips = [
  { id: "percentage-5", value: "5", value2: "5%", selected: false },
  { id: "percentage-10", value: "10", value2: "10%", selected: false },
  { id: "percentage-15", value: "15", value2: "15%", selected: false },
  { id: "percentage-25", value: "25", value2: "25%", selected: false },
  { id: "percentage-50", value: "50", value2: "50%", selected: false },
  { id: "custom", value: "", value2: "Custom", selected: false },
];

export default function Tip({ tips, setTips, onTipSelect }) {
  const handleCustomChange = (e) => {
    const customValue = e.target.value;
    setTips((prevTips) =>
      prevTips.map((tip) =>
        tip.id === "custom"
          ? { ...tip, value: customValue, selected: true }
          : tip
      )
    );
  };
  const handleCustomClick = () => {
    setTips((prevTips) =>
      prevTips.map((tip) =>
        tip.id === "custom"
          ? { ...tip, selected: true }
          : { ...tip, selected: false }
      )
    );
  };
  return (
    <ul>
      {tips.map((tip) =>
        tip.id === "custom" ? (
          <li key={tip.id}>
            <input
              type="number"
              placeholder="Custom"
              id="custom"
              className="percentage-button"
              value={tip.value}
              onChange={handleCustomChange}
              onClick={handleCustomClick}
            />
          </li>
        ) : (
          <TipItem
            key={tip.id}
            id={tip.id}
            value={tip.value}
            value2={tip.value2}
            onTipSelect={onTipSelect}
            selected={tip.selected}
          />
        )
      )}
    </ul>
  );
}
