import React, { useReducer } from "react";
import Contexto from "./Contexto";
import miReducer from "./miReducer";
import types from "./types";

const init = () => {
  /* Usamos "localStorage" para almacenar el valor inicial de useReducer (init)
   * por si se recarga la página.
   */
  const valor = localStorage.getItem("estado");
  console.log(valor)
  return {
    estado: !!valor
    /* estado: !!valor
    * !! es un operador que evalúa el valor de "valor"; si "valor" tiene algún valor,
    * será true, si no, será false. Esto se usa para almacenar datos cuando nos logueamos(valor=true),
    * y para borrarlos cuando nos deslogueamos (valor=false).
    */

  }

}

const Provider = ({ children }) => {
  /* useReducer se usará para guardar el valor de saber si está logueado o no.*/
  const [logueado, dispatch] = useReducer(miReducer, {}, init);

  const loguearme = () => {
    const action = {
      type: types.login
    }
    localStorage.setItem("estado", true)
    dispatch(action)
  }

  const desloguearme = () => {
    const action = {
      type: types.logout
    }
    localStorage.removeItem("estado")
    dispatch(action)
  }

  return (
    <Contexto.Provider value={{ ...logueado, loguearme, desloguearme }}>
      {children}
    </Contexto.Provider>
  );
};
export default Provider;
