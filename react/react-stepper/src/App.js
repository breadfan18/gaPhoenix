// IMPORT useState
import React, { useState } from "react";
import "./index.css";
import Display from "./components/Display";
import Stepper from "./components/Stepper";
import Counter from "./components/Counter";
import CheckboxWithLabel from "./components/CheckboxWithLabel";

export default function App() {

  const [count, setCount] = useState(0);

  const [checked, setChecked] = useState(false);

  function handleIncrement() {
      setCount(count + 1);
  }

  function handleDecrement() {
      setCount(count - 1)
  }

  const handleCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Stepper handleClick={handleDecrement} upOrDown='-'/>
      <Display count={count}/>
      <Stepper handleClick={handleIncrement} upOrDown='+'/>
      <CheckboxWithLabel checked={checked} handleCheckbox={handleCheckbox}/>
    </div>
  );
}
