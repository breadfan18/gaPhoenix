// IMPORT useState
import React, { useState } from "react";
import { students } from "./students";
import "./index.css";
import Student from "./Student";
import "./App.css";

export default function App() {
  const [allStudents, setAllStudenta] = useState(students);

  const studentComponents = allStudents.map((student, index) => <Student key={index} student={student}/>)
  
  return (
    <div className="App" style={{backgroundColor: 'rgba(0,0,0, 0.7)', paddingBottom: '2rem'}}>
      <h1 style={{color: 'white'}}>React Students</h1>
      <div className="studentsContainer">{studentComponents}</div>
    </div>
  );
}
