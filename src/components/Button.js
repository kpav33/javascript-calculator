import React from "react";

function Button({
  id,
  value,
  setCalculations,
  calculations,
  result,
  setResult,
  digit,
  setDigit,
  operatorArr,
  setOperatorArr,
}) {
  function handleClick() {
    // Refactore code into using switch statement!
    // Instead of one switch statement in one function rather use multiple functions for different actions?

    const conditions = ["/", "*", "-", "+"];

    try {
      switch (id) {
        case "clear":
          setCalculations("");
          setResult(0);
          console.log("CLEAR");
          break;
        case "divide":
          //setCalculations((prevState) => prevState + " / ");
          //setOperatorArr((prevArray) => [...prevArray, value]);
          setCalculations((prevState) => {
            //console.log(prevState.split("")[prevState.split("").length - 2]);
            let length = prevState.length;
            console.log(prevState.split(""));
            if (
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "/") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "+") ||
              (prevState.split("")[length - 2] === "-" &&
                prevState.split("")[length - 5] === "*")
            ) {
              console.log(prevState);
              return prevState.slice(0, length - 6) + " / ";
            }
            if (
              prevState.split("")[length - 2] === "/" ||
              prevState.split("")[length - 2] === "*" ||
              prevState.split("")[length - 2] === "-" ||
              prevState.split("")[length - 2] === "+"
            ) {
              console.log(prevState);
              return prevState.slice(0, length - 3) + " / ";
            }
            return prevState + " / ";
          });
          setResult("/");
          //console.log("DIVIDE");
          break;
        case "multiply":
          setOperatorArr((prevArray) => [...prevArray, "*"]);
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
              console.log(prevState);
              return prevState.slice(0, length - 6) + " * ";
            }

            if (
              prevState.split("")[length - 2] === "/" ||
              prevState.split("")[length - 2] === "*" ||
              prevState.split("")[length - 2] === "-" ||
              prevState.split("")[length - 2] === "+"
            ) {
              console.log(prevState);
              return prevState.slice(0, length - 3) + " * ";
            }
            return prevState + " * ";
          });
          console.log("MULTIPLY");
          setResult("*");
          break;
        case "subtract":
          // To pass last test maybe use regex?
          setOperatorArr((prevArray) => [...prevArray, value]);
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
              console.log(prevState);
              return prevState.slice(0, length - 6) + " - ";
            }

            if (prevState.split("")[length - 2] === "-") {
              console.log(prevState);
              return prevState.slice(0, length - 3) + " - ";
            }
            return prevState + " - ";
          });
          setResult("-");
          console.log("SUBTRACT");
          break;
        case "add":
          setOperatorArr((prevArray) => [...prevArray, value]);
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
              console.log(prevState);
              return prevState.slice(0, length - 6) + " + ";
            }

            if (
              prevState.split("")[length - 2] === "/" ||
              prevState.split("")[length - 2] === "*" ||
              prevState.split("")[length - 2] === "-" ||
              prevState.split("")[length - 2] === "+"
            ) {
              console.log(prevState);
              return prevState.slice(0, length - 3) + " + ";
            }
            return prevState + " + ";
          });
          setResult("+");
          console.log("ADD");
          break;
        case "equals":
          console.log(calculations);
          console.log(eval(calculations));
          setCalculations(eval(calculations).toString());
          setResult(eval(calculations));
          console.log("EQUALS");
          break;
        case "decimal":
          if (result.includes(".")) return;
          setCalculations((prevState) => prevState + ".");
          setResult((prevState) => prevState + value);
          console.log("DECIMAL");
          break;
        default:
          setResult((prevState) => {
            //console.log(typeof prevState);
            // Dont use strict equality for it to work
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
          // Check with an if statement inside of the setResult, to see what the prev state, if 0 do the required stuff (dont allow repeating), use same logic to check for operators or with double decimal dots
          // Delete the unnecessary stuff
          setCalculations((prevState) => {
            //return prevState + value;
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
    /*
    if (id === "clear") {
      setCalculations("");
      console.log("CLEAR");
    } else if (id === "divide") {
      setCalculations((prevState) => prevState + " / ");
      console.log("DIVIDE");
    } else if (id === "multiply") console.log("MULTIPLY");
    else if (id === "subtract") console.log("SUBTRACT");
    else if (id === "add") console.log("ADD");
    else if (id === "equals") {
      console.log(eval(calculations));
      console.log("EQUALS");
    } else if (id === "decimal") console.log("DECMIAL");
    else {
      setCalculations((prevState) => prevState + value);
    }*/
  }

  return (
    <button id={id} className={id} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
