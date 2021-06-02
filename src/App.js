import "./styles.scss";
import React, { useState } from "react";

import Display from "./components/Display";
import ButtonsPad from "./components/ButtonsPad";

function App() {
  const [calculations, setCalculations] = useState("");
  const [result, setResult] = useState("0");
  const [digit, setDigit] = useState("");
  const [operatorArr, setOperatorArr] = useState([]);

  console.log(operatorArr);

  return (
    <div className="app">
      <div className="calculator">
        <Display result={result} calculations={calculations} />
        <ButtonsPad
          setCalculations={setCalculations}
          calculations={calculations}
          result={result}
          setResult={setResult}
          digit={digit}
          setDigit={setDigit}
          operatorArr={operatorArr}
          setOperatorArr={setOperatorArr}
        />
      </div>
    </div>
  );
}

export default App;
