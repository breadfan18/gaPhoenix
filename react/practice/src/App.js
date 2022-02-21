// IMPORT useState
import React, { useState } from "react";
import Checkbox from "./CheckBox";
import "./index.css";

export default function App() {

  const [ count, setCount ] = useState(0);
  const [ checked, setChecked ] = useState(false)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleCheckbox = () => {
    setChecked(!checked);
  }

  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
     <button onClick={() => decrement()}>Decrease</button>
     <h1 style={{margin: '0 20px'}}>{count}</h1>
     <button onClick={() => increment()}>Increase</button>
     <Checkbox 
        checked={checked}
        setChecked={handleCheckbox}
      />
    </div>
  );
}
