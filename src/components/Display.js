import React from "react";

function Display({ result, calculations }) {
  return (
    <div className="display">
      <div>{calculations}</div>
      <div id="display">{result}</div>
    </div>
  );
}

export default Display;
