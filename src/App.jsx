import { useState, useEffect } from "react";
import ListaTareas from "./components/ListaTareas";
import FormularioTarea from "./components/FormularioTareas";
import "./styles/styles.css";

function App() {
  //  Recuperar tareas de localStorage al cargar la app
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState("");

  //  Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea(""); // Limpiar el input
  };

  // Función para eliminar una tarea por su índice
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <h1>Gestor de Tareas</h1>

      <FormularioTarea
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        agregarTarea={agregarTarea}
      />

      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
    </div>
  );
}

export default App;
