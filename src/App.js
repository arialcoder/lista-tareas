import { TareasBuscador } from "./components/TareaBuscador";
import { TareasContador } from "./components/TareasContador";
import { TareasLista } from "./components/TareasLista";
import { CrearTareaBtn } from "./components/CrearTareaBtn";
import { TareasItem } from "./components/TareasItem";
import "./styles.css";

const App = () => {
  const tareas = [
    { texto: "Estudiar React.js", Completado: true },
    { texto: "Node.js", Completado: false },
    { texto: "Crear repositorio github", Completado: false }
  ];
  return (
    <>
      <div className="App">
        <h1>Lista de Tareas</h1>
        <TareasContador />
        <TareasBuscador />
        <TareasLista>
          {tareas.map((tarea) => (
            <TareasItem
              key={tarea.texto}
              texto={tarea.texto}
              completado={tarea.Completado}
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
