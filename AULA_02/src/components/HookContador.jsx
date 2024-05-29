import React, { useState } from 'react';

const HookContador = () => {
  const [contador, setContador] = useState(1);

  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar contador</button>
    </div>
  );
};

export default HookContador;
