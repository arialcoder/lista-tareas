import React from "react";

const TareasContador = ({ total, completas }) => {
  return (
    <h2>
      Completaste {completas} de {total} tareas
    </h2>
  );
};

export { TareasContador };
