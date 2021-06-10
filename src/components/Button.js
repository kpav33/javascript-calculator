import React, { useEffect, useContext } from "react";
import { Context } from "../container/Context";

function Button({ id, value }) {
  const { calculations, setCalculations, result, setResult } =
    useContext(Context);

  // Refactored from switch statement to if/else so that I can use logical operators (might be a bit slower now) and to shorten the code (no repeating of logic)
  function calculatorLogic(caseValue) {
    if (caseValue === "clear" || caseValue === "Backspace") {
      setCalculations("0");
      setResult("0");
    } else if (caseValue === "divide" || caseValue === "/") {
      setCalculations((prevState) => {
        let length = prevState.length;
        // If statement checks whether the calculations ends with any of the possible operators and the operator - and if it does it replaces them with the clicked operator (In this case with divider " / ")
        // - 2 and - 5 used, because each operator has one empty space on its right and left
        // This was done to solve User Story #13 (If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign).)
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
        // Done for the same reasons as above if statement, with the difference that this if statement is used for cases where only one operator is present in the calculation
        // This was done to solve User Story #13 (If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign).)
        // This same logic is repeated below for every operator
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
    } else if (caseValue === "multiply" || caseValue === "*") {
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
    } else if (caseValue === "subtract" || caseValue === "-") {
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
    } else if (caseValue === "add" || caseValue === "+") {
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
    } else if (caseValue === "equals" || caseValue === "Enter") {
      // Function strip used to fix imprecise calculations in JS https://vyspiansky.github.io/2019/01/20/imprecise-calculations-in-javascript/
      function strip(number) {
        return parseFloat(number.toPrecision(16));
      }
      setCalculations(strip(eval(calculations)).toString());
      setResult(strip(eval(calculations)).toString());
    } else if (caseValue === "decimal" || caseValue === ".") {
      if (result.includes(".")) return;
      setCalculations((prevState) => prevState + ".");
      setResult((prevState) => prevState + value);
    } else {
      setResult((prevState) => {
        // Dont use strict equality with 0 for it to work
        if (
          prevState == "0" ||
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
        if (prevState == "0") {
          return value;
        }
        return prevState + value;
      });
    }
  }

  function handleClick() {
    try {
      calculatorLogic(id);
    } catch (err) {
      console.log(err);
      // Add material UI alert dialog component instead?
      alert(
        "Don't end or start your calculations with an operator... Make sure the calculations ends or starts with a number."
      );
    }
  }

  function handleKeyDown(e) {
    // Set focus away here to make sure no buttons are still focused from the handleClick function which causes a bug when you try to first use clicking with calculator and then keyboard controls
    const nodeList = document.querySelectorAll("button");
    [...nodeList].map((button) => button.blur());

    // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    const keyCodeArr = [
      8, 13, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102,
      103, 104, 105, 106, 107, 109, 110, 111, 190,
    ];
    if (keyCodeArr.includes(e.keyCode)) {
      value = e.key === "," ? "." : e.key;
      try {
        calculatorLogic(value);
      } catch (err) {
        console.log(err);
        // Add material UI alert dialog component instead?
        setCalculations("0");
        setResult("0");
        alert(
          "Don't end or start your calculations with an operator... Make sure the calculations ends or starts with a number."
        );
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <button id={id} className={id} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
