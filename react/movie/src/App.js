// IMPORT useState
import React, { useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import "./index.css";

export default function App() {
  const API_KEY = '7ca211f2';
  const [ movie, setMovie ] = useState(null);
  
  const getMovie = async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`);
    const data = await response.json();
    setMovie(data)
  }

  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}
