// IMPORT useState
import React, { useState, useEffect } from "react";
import "./index.css";
import Form from "./Form";
import Display from "./Display";

export default function App() {
  const API_KEY = 'cYY2RGnMz0QbUuZwah7huztQSLrRZ2mE';
  const [ gif, setGif ] = useState('');

  const getGif = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const data = await response.json();

    setGif(data.data.images.original.url);
  }

  useEffect(() => getGif(), [])

  return (
    <div className="App">
      <h1>Giffer</h1>
      <Form getGif={getGif}/>
      <Display gif={gif}/> 
    </div>
  );
}
