import React from "react";
import "./TareasItem.css";

const TareasItem = (props) => {
  const onCompletado = () => {
    alert(`Tarea ${props.texto} completa~!!!`);
  };

  const onDelete = () => {
    alert("Borraste la tarea: " + props.texto);
  };

  return (
    <li className="tareasItem">
      <span
        className={`Icon-check--active ${
          props.completado && "Icon-check--active"
        }`}
        onClick={onCompletado}>
        √
      </span>
      <p
        className={`tareasItem-p ${
          props.completado && "tareasItem-p--completa"
        }`}>
        {props.texto}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
};

export { TareasItem };
