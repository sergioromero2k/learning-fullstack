import { useState } from "react";
/*
Contador simple (Fácil)
Crea un componente que muestre un número inicial (0) y tenga dos botones: Incrementar y Decrementar, que aumenten o disminuyan el número respectivamente.
*/

function Contador() {
  const [Contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {Contador}</p>
      <button onClick={() => setContador(Contador + 1)}>Aumentar + 1</button>
      <button onClick={() => setContador(Contador - 1)}>Disminuir - 1</button>
    </div>
  );
}

export default Contador;
