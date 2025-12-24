import { useState } from "react";

function Contador() {
  const [Contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic chaval {Contador}</p>
      <button onClick={() => setContador(Contador + 1)}>Clic</button>
    </div>
  );
}

export default Contador;
