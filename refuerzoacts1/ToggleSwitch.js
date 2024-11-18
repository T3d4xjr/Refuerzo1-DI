import { useState } from 'react';

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

 
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>Estado: {isOn ? 'ON' : 'OFF'}</h2>
      <button onClick={toggleSwitch}>Alternar</button>
    </div>
  );
}
