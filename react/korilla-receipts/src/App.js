// IMPORT useState
import React, { useState } from "react";
import "./index.css";
import receiptsArr from "./receiptData";

//Component imports
import Form from "./components/Form";
import Receipts from "./components/Receipts";


export default function App() {

  const [ receiptState, setReceiptState ] = useState({
    receipts: receiptsArr,
    filteredReceipts: [],
    showFilter: true
  });

  const handleSearch = (e) => {
    
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Korilla Receipts</h1>
      <Form />
      <Receipts receipts={receiptState.receipts}/>
    </div>
  );
}
