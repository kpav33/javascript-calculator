import React from "react";

function Button({ id, value }) {
  function handleClick() {
    // Refactore code into using switch statement!
    if (id === "clear") console.log("CLEAR");
    else if (id === "divide") console.log("DIVIDE");
    else if (id === "multiply") console.log("MULTIPLY");
    else if (id === "subtract") console.log("SUBTRACT");
    else if (id === "add") console.log("ADD");
    else if (id === "equals") console.log("EQUALS");
    else if (id === "decimal") console.log("DECMIAL");
    else {
      console.log(id);
    }
  }

  return (
    <button id={id} className={id} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
