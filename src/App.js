import React, { useState } from "react";
import { TareasBuscador } from "./components/TareaBuscador";
import { TareasContador } from "./components/TareasContador";
import { TareasLista } from "./components/TareasLista";
import { CrearTareaBtn } from "./components/CrearTareaBtn";
import { TareasItem } from "./components/TareasItem";
import "./styles.css";

const defaultTareas = [
  { texto: "Estudiar React.js", completado: true },
  { texto: "Node.js", completado: true },
  { texto: "Crear repositorio github", completado: false }
];

const App = (props) => {
  const [tareas, setTareas] = useState(defaultTareas);

  const [valorBuscador, setValorBuscador] = useState("");
  console.log(props);

  const tareasCompletas = tareas.filter((tarea) => tarea.completado).length;

  const totalTareas = tareas.length;

  let buscarTareas = [];

  if (valorBuscador.length <= 0) {
    buscarTareas = tareas;
  } else {
    buscarTareas = tareas.filter((tarea) => {
      const tareasTexto = tarea.texto.toLowerCase();
      const buscardorTexto = valorBuscador.toLowerCase();

      return tareasTexto.includes(buscardorTexto);
    });
  }

  // funcion busca nuevas tareas
  const tareaCompleta = (texto) => {
    const tareasIndex = tareas.findIndex((tarea) => tarea.texto === texto);
    const newTareas = [...tareas];
    newTareas[tareasIndex].completado = true;
    setTareas(newTareas);
  };

  // funcion borra tareas
  const tareaBorrada = (texto) => {
    const tareasIndex = tareas.findIndex((tarea) => tarea.texto === texto);
    const newTareas = [...tareas];
    newTareas.splice(tareasIndex, 1);
    setTareas(newTareas);
  };
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
          {buscarTareas.map((tarea) => (
            <TareasItem
              key={tarea.texto}
              texto={tarea.texto}
              completado={tarea.completado}
              ontareaCompleta={() => tareaCompleta(tareas.texto)}
              ontareaBorrada={() => tareaBorrada(tareas.texto)}
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
