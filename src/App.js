import "./styles.scss";
import React, { useState } from "react";

import Display from "./components/Display";
import ButtonsPad from "./components/ButtonsPad";

function App() {
  const [calculations, setCalculations] = useState("test");
  const [result, setResult] = useState(0);

  return (
    <div className="app">
      <div className="calculator">
        <Display result={result} calculations={calculations} />
        <ButtonsPad />
      </div>
    </div>
  );
}

export default App;
