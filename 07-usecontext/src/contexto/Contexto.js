import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const Datos = ({ children }) => {
  const [color, setColor] = useState("purple");
  return (
    <Contexto.Provider value={{ color, setColor }}>
      {children}
    </Contexto.Provider>
  );
};
