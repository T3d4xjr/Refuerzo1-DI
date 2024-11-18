
import { useState } from 'react';

export default function LoginControl() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>
    </div>
  );
}
