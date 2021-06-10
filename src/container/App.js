import "../styles.scss";
import React from "react";

import Display from "../components/Display";
import ButtonsPad from "../components/ButtonsPad";

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <Display />
        <ButtonsPad />
      </div>
    </div>
  );
}

export default App;
