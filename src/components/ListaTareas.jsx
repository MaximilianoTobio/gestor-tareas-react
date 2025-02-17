function ListaTareas({ tareas, eliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>
          {tarea}
          <button className="eliminar" onClick={() => eliminarTarea(index)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
