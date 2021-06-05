import React from "react";

function Display({ result, calculations }) {
  // Inline style used to make the font size of result smaller over certain lengths, to make sure the result stays in one line
  const fontSize =
    result.toString().length > 18
      ? { fontSize: "1.6rem" }
      : { fontSize: "1.8rem" };

  return (
    <div className="display">
      <div>{calculations}</div>
      <div id="display" style={fontSize}>
        {result}
      </div>
    </div>
  );
}

export default Display;
