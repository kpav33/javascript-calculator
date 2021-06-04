import React from "react";

function Button({
  id,
  value,
  setCalculations,
  calculations,
  result,
  setResult,
}) {
  function handleClick() {
    try {
      switch (id) {
        case "clear":
          setCalculations("0");
          setResult(0);
          break;
        case "divide":
          setCalculations((prevState) => {
            let length = prevState.length;
            if (
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "/") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "+") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "*")
            ) {
              return prevState.slice(0, length - 6) + " / ";
            }
            if (
              prevState.split("")[length - 2] === "/" ||
              prevState.split("")[length - 2] === "*" ||
              prevState.split("")[length - 2] === "-" ||
              prevState.split("")[length - 2] === "+"
            ) {
              return prevState.slice(0, length - 3) + " / ";
            }
            return prevState + " / ";
          });
          setResult("/");
          break;
        case "multiply":
          setCalculations((prevState) => {
            let length = prevState.length;
            if (
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "/") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "+") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "*")
            ) {
              return prevState.slice(0, length - 6) + " * ";
            }

            if (
              prevState.split("")[length - 2] === "/" ||
              prevState.split("")[length - 2] === "*" ||
              prevState.split("")[length - 2] === "-" ||
              prevState.split("")[length - 2] === "+"
            ) {
              return prevState.slice(0, length - 3) + " * ";
            }
            return prevState + " * ";
          });
          setResult("*");
          break;
        case "subtract":
          setCalculations((prevState) => {
            let length = prevState.length;

            if (
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "/") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "+") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "*")
            ) {
              return prevState.slice(0, length - 6) + " - ";
            }

            if (prevState.split("")[length - 2] === "-") {
              return prevState.slice(0, length - 3) + " - ";
            }
            return prevState + " - ";
          });
          setResult("-");
          break;
        case "add":
          setCalculations((prevState) => {
            let length = prevState.length;

            if (
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "/") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "+") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "*")
            ) {
              return prevState.slice(0, length - 6) + " + ";
            }

            if (
              prevState.split("")[length - 2] === "/" ||
              prevState.split("")[length - 2] === "*" ||
              prevState.split("")[length - 2] === "-" ||
              prevState.split("")[length - 2] === "+"
            ) {
              return prevState.slice(0, length - 3) + " + ";
            }
            return prevState + " + ";
          });
          setResult("+");
          break;
        case "equals":
          setCalculations(eval(calculations).toString());
          setResult(eval(calculations));
          break;
        case "decimal":
          if (result.includes(".")) return;
          setCalculations((prevState) => prevState + ".");
          setResult((prevState) => prevState + value);
          break;
        default:
          setResult((prevState) => {
            // Dont use strict equality with 0 for it to work
            if (
              prevState == 0 ||
              prevState === "/" ||
              prevState === "*" ||
              prevState === "-" ||
              prevState === "+"
            ) {
              return value;
            }
            return prevState + value;
          });
          setCalculations((prevState) => {
            if (prevState == 0) {
              return value;
            }
            return prevState + value;
          });
      }
    } catch (err) {
      console.log(err);
      // Add material UI alert dialog component instead?
      alert(
        "Don't end or start your calculations with an operator... Make sure the calculations ends or starts with a number."
      );
    }
  }

  return (
    <button id={id} className={id} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
