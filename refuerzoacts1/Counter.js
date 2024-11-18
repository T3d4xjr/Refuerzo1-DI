
import { useState } from 'react';

export default function Counter() {
  const [contador, setCount] = useState(0);

  const incrementar = () => setCount(contador + 1);

  return (
    <div>
      <p>Contador{contador}</p>
      <button onClick={incrementar}>Incrementa el contador</button>
    </div>
  );
}
