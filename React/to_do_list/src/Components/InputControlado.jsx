import { useState } from "react";

/*
-- Input controlado (Fácil)
Crea un formulario con un <input> de texto y un <p> que muestre lo que el usuario escribe en tiempo real.
Usa useState para almacenar el valor del input.
*/
function InputControlado() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        name={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Escribiste: {text}</p>
    </div>
  );
}
export default InputControlado;
