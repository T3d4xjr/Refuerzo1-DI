
export default function Dropdown({ opciones }) {
    const [seleccionado, setSeleccionado] = useState(opciones[0]);
  
    const manejarSeleccion = (e) => {
      setSeleccionado(e.target.value);
    };
  
    return (
      <div>
        <select value={seleccionado} onChange={manejarSeleccion}>
          {opciones.map((opcion, index) => (
            <option key={index} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
        <p>Opción seleccionada: {seleccionado}</p>
      </div>
    );
  }
  