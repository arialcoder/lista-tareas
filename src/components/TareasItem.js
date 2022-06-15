import React from "react";
import "./TareasItem.css";

const TareasItem = (props) => {
  return (
    <li className="tareasItem">
      <span
        className={`Icon Icon-check ${
          props.Completado && "Icon-check--active"
        }`}
      >
        √
      </span>
      <p
        className={`tareasItem-p ${
          props.Completado && "tareasItem-p--completa"
        }`}
      >
        {props.texto}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
};

export { TareasItem };
