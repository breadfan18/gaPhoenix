// IMPORT useState
import React, { useState } from "react";
import { students } from "./students";
import "./index.css";
import Student from "./Student";
import "./App.css";

export default function App() {
  const [allStudents, setAllStudenta] = useState(students);

  const studentComponents = allStudents.map((student, index) => (
    <>
      <Student
        key={index}
        student={student}
      />
    </>)
  )
  return (
    <div className="App">
      <h1>React Students</h1>
      <div className="studentsContainer">{studentComponents}
        <hr />
      </div>
    </div>
  );
}
