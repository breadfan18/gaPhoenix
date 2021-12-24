// IMPORT useState
import React, { useState } from "react";
import { students } from "./students";
import "./index.css";

const allStudents = students;

export default function App() {
  
  const [ students, setStudent ] = useState(allStudents)

  console.log(students);
  return (
    <div className="App">
      <h1>Template</h1>
    </div>
  );
}
