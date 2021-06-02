import React from "react";

function Display({ result, calculations }) {
  return (
    <div className="display">
      <p>{calculations}</p>
      <p id="display">{result}</p>
    </div>
  );
}

export default Display;
