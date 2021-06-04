import "./styles.scss";
import React, { useState } from "react";

import Display from "./components/Display";
import ButtonsPad from "./components/ButtonsPad";

function App() {
  const [calculations, setCalculations] = useState("0");
  const [result, setResult] = useState("0");

  return (
    <div className="app">
      <div className="calculator">
        <Display result={result} calculations={calculations} />
        <ButtonsPad
          setCalculations={setCalculations}
          calculations={calculations}
          result={result}
          setResult={setResult}
        />
      </div>
    </div>
  );
}

export default App;
