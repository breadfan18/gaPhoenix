// IMPORT useState
import React, { useState } from "react";
import { students } from "./students";
import "./index.css";
import Student from "./Student";
import "./App.css";

export default function App() {
  const [allStudents, setAllStudents] = useState(students);

  const studentComponents = allStudents.map((student, index) => <Student key={index} student={student} />)

  // window.onscroll = () => stickyHeader();
  // let header = document.querySelector('#myHeader');
  // let sticky = header.offsetTop;
  
  // const stickyHeader = () => {
  //   window.pageYOffset > sticky ? header.classList.add('sticky') : header.classList.remove('sticky');
  // }

  return (
    <div className="App">
      <div className="header" id="myHeader">
        <h1>React Students</h1>
      </div>
      <div className="studentsContainer">{studentComponents}</div>
    </div>
  );
}
