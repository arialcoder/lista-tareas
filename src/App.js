import React, { useState } from "react";
import { TareasBuscador } from "./components/TareaBuscador";
import { TareasContador } from "./components/TareasContador";
import { TareasLista } from "./components/TareasLista";
import { CrearTareaBtn } from "./components/CrearTareaBtn";
import { TareasItem } from "./components/TareasItem";
import "./styles.css";

const App = (props) => {
  const [tareas, setTareas] = useState("");

  const [valorBuscador, setValorBuscador] = useState("");
  console.log(props);

  const tareasCompletas = tareas.filter((tarea) => tarea.completado).length;

  const totalTareas = tareas.length;

  let buscarTareas = [];

  if (valorBuscador.length <= 0) {
    buscarTareas = tareas;
  } else {
    buscarTareas = tareas.filter((tarea) => {
      const tareasTexto = tareas.texto.toLocaleLowerCase();
      const buscardorTexto = valorBuscador.toLocaleLowerCase();

      return tareasTexto.includes(buscardorTexto);
    });
  }

  const defaultTareas = [
    { texto: "Estudiar React.js", completado: true },
    { texto: "Node.js", completado: true },
    { texto: "Crear repositorio github", completado: false }
  ];
  return (
    <>
      <div className="App">
        <h1>Lista de Tareas</h1>
        <TareasContador total={totalTareas} />
        <TareasBuscador
          valorBuscador={valorBuscador}
          setValorBuscador={setValorBuscador}
        />
        <TareasLista>
          {defaultTareas.map((tarea) => (
            <TareasItem
              key={tarea.texto}
              texto={tarea.texto}
              completado={tarea.completado}
            />
          ))}
        </TareasLista>
        <CrearTareaBtn />

        {/* <div className="card">
          <div className="top"></div>
          <div className="bottom">
            <p>curso de Introduccion de React.js</p>
            <p></p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export { App };
