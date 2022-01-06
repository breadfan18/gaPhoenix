// IMPORT useState
import React, { useState } from "react";
import Price from "./pages/Price";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import "./index.css";
import { Route } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <Route path='/'>
        <Main/>
      </Route>
      <Route path='/currencies'>
        <Currencies/>
      </Route>
      <Route path='/price'>
        <Price/>
      </Route>
    </div>
  );
}
