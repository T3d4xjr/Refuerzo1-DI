export default function ShoppingList({ productos }) {
    const [listaProductos, setListaProductos] = useState(productos);
  
    const eliminarProducto = (index) => {
      const nuevaLista = listaProductos.filter((_, i) => i !== index);
      setListaProductos(nuevaLista);
    };
  
    return (
      <div>
        <ul>
          {listaProductos.map((producto, index) => (
            <li key={index}>
              {producto}
              <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  