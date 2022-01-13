// IMPORT useState
import React, { useState } from "react";
import "./index.css";
import receiptsArr from "./receiptData";

//Component imports
import Form from "./components/Form";
import Receipts from "./components/Receipts";


export default function App() {

  const [receiptState, setReceiptState] = useState({
    receipts: receiptsArr,
    filteredReceipts: [],
    showFilter: false
  });

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setReceiptState({
        ...receiptState,
        filteredReceipts: [],
        showFilter: false
      })
    } else {
      setReceiptState({
        ...receiptState,
        filteredReceipts: receiptState.receipts.filter(r => r.person.toLowerCase().includes(searchTerm.toLowerCase())),
        showFilter: true
      })
    }
  }

  const handleClick = (id) => {
    receiptState.receipts.forEach(r => {
      if (r.id === parseInt(id)) {
        r.paid = !r.paid
      }
    });
    setReceiptState({
      ...receiptState,
    })
  }

  const handleFilter = (filter) => {
    if(filter === null){
      setReceiptState({
        ...receiptState,
        filteredReceipts: [],
        showFilter: false
      })
    }else if (filter === true) {
      setReceiptState({
        ...receiptState,
        filteredReceipts: receiptState.receipts.filter(r => r.paid === true),
        showFilter: true
      })
    }else if (filter === false) {
      setReceiptState({
        ...receiptState,
        filteredReceipts: receiptState.receipts.filter(r => r.paid === false),
        showFilter: true
      })
    }
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Korilla Receipts</h1>
      <Form 
        handleSearch={handleSearch} 
        handleFilter={handleFilter}
      />
      <Receipts
        receipts={receiptState.receipts}
        filteredReceipts={receiptState.filteredReceipts}
        showFilter={receiptState.showFilter}
        handleClick={handleClick}
      />
    </div>
  );
}
