import Product from "./Product";

const productos =[{
    nombre:"producto 1",precio :25,descripcion:"este es el producto 1",
    nombre:"producto 1",precio :25,descripcion:"este es el producto 2",
}];

export default function ProductList (){
    return(
        <div>
        {productos.map((producto,index) =>(
            <producto
            key={index}
            name={producto.name}
            precio={producto.precio}
            descripcion = {producto.descripcion}
            />
        ))}
        
      </div>
    );
}