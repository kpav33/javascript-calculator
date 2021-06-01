import React from "react";

function Display({ result, calculations }) {
  return (
    <div className="display" id="display">
      <p>{calculations}</p>
      <p>{result}</p>
    </div>
  );
}

export default Display;
