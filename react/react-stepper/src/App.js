// IMPORT useState
import React, { useState } from "react";
import "./index.css";
import Display from "./components/Display";
import Stepper from "./components/Stepper";
import Counter from "./components/Counter";

export default function App() {

  let [value, setValue] = useState(0)

  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Counter />
    </div>
  );
}
