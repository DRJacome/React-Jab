import React, { useContext } from "react";
import { Contexto } from "./contexto/Contexto";

function Pagina2() {
  const { color } = useContext(Contexto);
  return (
    <div className="hijo" style={{ background: color }}>
      <p style={{ color: "white" }}>Página 2</p>
    </div>
  );
}
export default Pagina2;
