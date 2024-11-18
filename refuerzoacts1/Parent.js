import { useState } from 'react';

function Child({ mensajeDePadre, paraPadre }) {
  return (
    <div>
      <h2>{mensajeDePadre}</h2>
      <button onClick={() => paraPadre('¡Hola desde el Hijo!')}>
        Enviar mensaje al Padre
      </button>
    </div>
  );
}

export default function Parent() {

  const [mensajePadre, setMessage] = useState('¡Hola desde el Padre!');

  
  const mensaje = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <Child mensajeDePadre={mensajePadre} paraPadre={mensaje} />
    </div>
  );
}
