function FormularioTarea({ nuevaTarea, setNuevaTarea, agregarTarea }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={nuevaTarea}
        onChange={(event) => setNuevaTarea(event.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>
    </div>
  );
}

export default FormularioTarea;
