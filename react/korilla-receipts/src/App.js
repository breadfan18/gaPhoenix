// IMPORT useState
import React, { useState } from "react";
import "./index.css";
import receiptsArr from "./receiptData";

//Component imports
import Form from "./components/Form";
import Receipts from "./components/Receipts";


export default function App() {

  const [ receipts, setReceipts ] = useState(receiptsArr);

  return (
    <div className="App">
      <Form />
      <Receipts receipts={receipts}/>
    </div>
  );
}
