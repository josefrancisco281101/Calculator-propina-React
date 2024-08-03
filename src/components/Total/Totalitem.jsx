import React from "react";

export default function Totalitem({ clase, title, person, id, value }) {
  return (
    <div className={clase}>
      <div>
        <h2>{title}</h2>
        <p>{person}</p>
      </div>
      <h3>
        $<span id={id}>{value}</span>
      </h3>
    </div>
  );
}
