import React from "react";
import "./CrearTareaBtn.css";

const CrearTareaBtn = () => {
  const onClickBoton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="crearTareaBtn"
      onClick={() => onClickBoton("abrir modal")}>
      +
    </button>
  );
};
export { CrearTareaBtn };
