// IMPORT useState
import React, { useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import "./index.css";

export default function App() {

  return (
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}
