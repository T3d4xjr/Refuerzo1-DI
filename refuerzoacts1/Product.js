export default function Product({nombre,precio,descripcion}){
    return(
        <div className="productos">
        <h2>{nombre}</h2>
        <p>Precio: ${precio}</p>
        <p>{descripcion}</p>
      </div>
    );
}