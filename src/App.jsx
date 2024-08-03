import React, { useEffect, useState } from "react";
import Tip, { initialTips } from "./components/Tip";
import Label, { initialLabels } from "./components/Label";
import Total, { initialTotals } from "./components/Total";

const emptyLabels = [
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

const emptyTotals = [
  {
    clase: "text-amount",
    title: "Tip Amount",
    person: "/ person",
    id: "tip-amount",
    value: 0,
  },
  {
    clase: "total-amount",
    title: "Total",
    person: "/ person",
    id: "total",
    value: 0,
  },
];
const emptyTips = [
  { id: "percentage-5", value: "5", value2: "5%", selected: false },
  { id: "percentage-10", value: "10", value2: "10%", selected: false },
  { id: "percentage-15", value: "15", value2: "15%", selected: false },
  { id: "percentage-25", value: "25", value2: "25%", selected: false },
  { id: "percentage-50", value: "50", value2: "50%", selected: false },
  { id: "custom", value: "", value2: "Custom", selected: false },
];
export default function App() {
  const [tips, setTips] = useState(initialTips);
  const [labels, setLabels] = useState(initialLabels);
  const [totals, setTotals] = useState(initialTotals);

  const handleLabelChange = (id, value) => {
    setLabels((prevLabels) =>
      prevLabels.map((label) =>
        label.id === id ? { ...label, valor: value } : label
      )
    );
  };
  const handleTipSelection = (id) => {
    setTips((prevTips) =>
      prevTips.map((tip) => ({
        ...tip,
        selected: tip.id === id,
      }))
    );
  };
  const reset = () => {
    setLabels(emptyLabels);
    setTotals(emptyTotals);
    setTips(emptyTips);
  };

  useEffect(() => {
    const bill =
      parseFloat(labels.find((label) => label.id === "input-bill").valor) || 0;
    const people =
      parseInt(labels.find((label) => label.id === "input-people").valor) || 1;

    const selectedTip =
      tips.find((tip) => tip.selected)?.value ||
      parseFloat(tips.find((tip) => tip.id === "custom").value) ||
      0;

    if (bill > 0 && selectedTip > 0 && people > 0) {
      const totalTip = (bill * (selectedTip / 100)) / people;
      const totalAmount = bill / people + totalTip;

      setTotals([
        { ...totals[0], value: totalTip.toFixed(2) },
        { ...totals[1], value: totalAmount.toFixed(2) },
      ]);
    }
  }, [labels, tips]);

  return (
    <>
      <header>
        <img src="./images/logo.svg" alt="Logo" />
      </header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1>
          <Label labels={[labels[0]]} onChange={handleLabelChange} />
          <h2>Select Tip %</h2>
          <Tip tips={tips} setTips={setTips} onTipSelect={handleTipSelection} />

          <h2>Number of People</h2>
          <Label labels={[labels[1]]} onChange={handleLabelChange} />
        </div>
        <div className="result-wrapper">
          <div className="result-txt">
            <Total totals={totals} />
          </div>
          <button
            type="button"
            id="reset-button"
            className="reset-button"
            onClick={reset}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
