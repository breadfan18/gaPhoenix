// IMPORT useState
import React, { useState } from "react";
import "./index.css";

//Component imports
import Form from "./components/Form";
import Receipts from "./components/Receipts";

export default function App() {

  return (
    <div className="App">
      <Form />
      <Receipts />
    </div>
  );
}
