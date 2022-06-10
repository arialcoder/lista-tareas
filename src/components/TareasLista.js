import React from "react";

const TareasLista = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export { TareasLista };
