// IMPORT useState
import React, { useState } from "react";
import { students } from "./students";
import "./index.css";
import Student from "./Student";
import "./App.css";

export default function App() {
  const [allStudents, setAllStudents] = useState(students);
  const [header, setHeader] = useState(false);

  const studentComponents = allStudents.map((student, index) => <Student key={index} student={student} />)
  const changeBackground = () => window.scrollY > 60 ? setHeader(true) : setHeader(false);
  window.onscroll = () => changeBackground();

  return (
    <div className="App">
      <div className={header ? 'header active' : 'header'} id="myHeader">
        <h2 className="nonBurgerMenu">Home</h2>
        <h1 className="nonBurgerMenu">React Students</h1>
        <h2 className="nonBurgerMenu">Menu</h2>
        <div className="burgerMenu">
          <h1>React Students</h1>
          <img src="https://img.icons8.com/ios-glyphs/24/ffffff/menu.png" alt="burger"/>
        </div>
      </div>

      <div className="studentsContainer">{studentComponents}</div>
    </div>
  );
}
