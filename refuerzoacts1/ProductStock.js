export default function ProductStock({ inStock }) {
    return (
      <div>
        {inStock ? 'Producto disponible' : 'Producto agotado'}
      </div>
    );
  }
  