import React, { useState } from "react";
import "./TareasBuscador.css";

const TareasBuscador = () => {
  const [estado, setEstado] = useState("");

  const onSearchChance = (ev) => {
    console.log(ev.target.value);
    setEstado(ev.target.value);
  };

  return (
    <>
      <input
        className="tareasBuscador"
        placeholder="Buscar item"
        value={estado}
        onChange={onSearchChance}
      />
      <p>{estado}</p>
    </>
  );
};

export { TareasBuscador };
