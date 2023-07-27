import React, { useState } from 'react';

const CartWidget = () => {

  const [acumulado, setAcumulado] = useState(0);

  const handleClick = () => {

    setAcumulado(acumulado + 1);
  };

  return (
    <div>
    <i class="bi bi-bag-fill"></i>
    <p>Productos: {acumulado}</p>
    <button onClick={handleClick}>Agregar</button>
    </div>
  );
};

export default CartWidget;

