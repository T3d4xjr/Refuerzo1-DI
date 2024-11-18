import { useState } from 'react';

export default function ToDoList() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

 
  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, { texto: tarea, completada: false }]);
      setTarea('');
    }
  };

  const marcarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <span onClick={() => marcarTarea(index)}>
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
