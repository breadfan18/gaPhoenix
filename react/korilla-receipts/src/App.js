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

  const handleSearch = (searchTerm) => {
      if (searchTerm === ""){
        setReceiptState(...receiptState)
      }else {
        setReceiptState({
          ...receiptState,
          filteredReceipts: receiptState.receipts.filter(r => r.person.toLowerCase().includes(searchTerm.toLowerCase())),
          showFilter: true
        })
      }
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Korilla Receipts</h1>
      <Form handleSearch={handleSearch}/>
      <Receipts receipts={receiptState.receipts}/>
    </div>
  );
}
