import React from "react";
import "./TareasLista.css";

const TareasLista = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export { TareasLista };
