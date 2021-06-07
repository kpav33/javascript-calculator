import React, { useEffect } from "react";

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
          setResult("0");
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
          // Function strip used to fix imprecise calculations in JS https://vyspiansky.github.io/2019/01/20/imprecise-calculations-in-javascript/
          function strip(number) {
            return parseFloat(number.toPrecision(16));
          }
          setCalculations(strip(eval(calculations)).toString());
          setResult(strip(eval(calculations)).toString());
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
    } catch (err) {
      console.log(err);
      // Add material UI alert dialog component instead?
      alert(
        "Don't end or start your calculations with an operator... Make sure the calculations ends or starts with a number."
      );
    }
  }

  function handleKeyDown(e) {
    // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    const keyCodeArr = [
      8, 13, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102,
      103, 104, 105, 106, 107, 109, 110, 111, 190,
    ];
    if (keyCodeArr.includes(e.keyCode)) {
      value = e.key === "," ? "." : e.key;
      try {
        switch (value) {
          case "Backspace":
            setCalculations("0");
            setResult("0");
            break;
          case "/":
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
          case "*":
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
          case "-":
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
          case "+":
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
          case "Enter":
            function strip(number) {
              return parseFloat(number.toPrecision(16));
            }
            setCalculations(strip(eval(calculations)).toString());
            setResult(strip(eval(calculations)).toString());
            break;
          case ".":
            if (result.includes(".")) return;
            setCalculations((prevState) => prevState + ".");
            setResult((prevState) => prevState + value);
            break;
          default:
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
