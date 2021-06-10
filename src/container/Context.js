import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // The calculation
  const [calculations, setCalculations] = useState("0");

  // Store the result of the calculation
  const [result, setResult] = useState("0");

  return (
    <Context.Provider
      value={{ calculations, setCalculations, result, setResult }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
