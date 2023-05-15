import React, { useContext } from "react";
import { Contexto } from "./contexto/Contexto";

function Pagina3() {
  const { color } = useContext(Contexto);
  return (
    <div className="hijo" style={{ background: color }}>
      <p style={{ color: "white" }}>Página 3</p>
    </div>
  );
}
export default Pagina3;
