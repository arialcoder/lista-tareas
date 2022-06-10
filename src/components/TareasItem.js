import React from "react";

const TareasItem = (props) => {
  return (
    <li className="tareasLista">
      <span
        className={`'Icon Icon-check' ${
          props.Completado && "Icon-check--active"
        }`}
      >
        ok Icon-check
      </span>
      <p
        className={`listaTareas-p ${
          props.Completado && "listaTareas-p--completa"
        }`}
      >
        {props.texto}
      </p>
    </li>
  );
};

export { TareasItem };
