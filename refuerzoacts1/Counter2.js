import { useState } from 'react';

export default function Counter() {
 
  const [contador, setContador] = useState(0);

 
  const incrementar = () => {
    setContador(contador + 1);
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
}
