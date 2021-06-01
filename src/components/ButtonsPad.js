import React from "react";

import Button from "./Button";
import buttonsArr from "../buttonsArr";

function ButtonsPad() {
  return (
    <div className="buttonsPad">
      {buttonsArr.map((button) => {
        return <Button id={button.id} key={button.id} value={button.value} />;
      })}
    </div>
  );
}

export default ButtonsPad;
