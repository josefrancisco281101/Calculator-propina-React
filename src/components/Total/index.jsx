import React from "react";
import Totalitem from "./Totalitem";

export const initialTotals = [
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
export default function Total({ totals }) {
  return (
    <>
      {totals.map((total) => (
        <Totalitem
          key={total.id}
          clase={total.clase}
          title={total.title}
          person={total.person}
          id={total.id}
          value={total.value}
        />
      ))}
    </>
  );
}
