import React from "react";
import "./TareasBuscador.css";

const TareasBuscador = ({ valorBuscador, setValorBuscador }) => {
  const onSearchChance = (ev) => {
    console.log(ev.target.value);
    setValorBuscador(ev.target.value);
  };

  return (
    <>
      <input
        className="tareasBuscador"
        placeholder="Buscar item"
        value={valorBuscador}
        onChange={onSearchChance}
      />
      <p>{valorBuscador}</p>
    </>
  );
};

export { TareasBuscador };
