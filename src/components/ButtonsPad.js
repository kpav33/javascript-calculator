import React from "react";

import Button from "./Button";
import buttonsArr from "../buttonsArr";

function ButtonsPad({
  setCalculations,
  calculations,
  result,
  setResult,
  digit,
  setDigit,
  operatorArr,
  setOperatorArr,
}) {
  return (
    <div className="buttonsPad">
      {buttonsArr.map((button) => {
        return (
          <Button
            id={button.id}
            key={button.id}
            value={button.value}
            setCalculations={setCalculations}
            calculations={calculations}
            result={result}
            setResult={setResult}
            digit={digit}
            setDigit={setDigit}
            operatorArr={operatorArr}
            setOperatorArr={setOperatorArr}
          />
        );
      })}
    </div>
  );
}

export default ButtonsPad;
