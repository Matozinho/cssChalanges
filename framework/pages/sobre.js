import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <button onClick={adicionarContador}>Adicionar</button>
      <div> {contador} </div>
    </div>
  );
}

export default function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>

      <Contador />
    </div>
  );
}
