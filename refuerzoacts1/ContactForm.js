import { useState } from 'react';

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [exito, setExito] = useState(false);

 
  const enviarFormulario = (e) => {
    e.preventDefault();
    if (nombre && email && mensaje) {
      setExito(true);
    } else {
      setExito(false);
    }
  };

  return (
    <div>
      <form onSubmit={enviarFormulario}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {exito && <p>¡Formulario enviado con éxito!</p>}
    </div>
  );
}
