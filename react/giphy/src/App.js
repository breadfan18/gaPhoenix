// IMPORT useState
import React, { useEffect, useState } from "react";
import Form from './components/Form';
import GifDisplay from "./components/GifDisplay";
import "./index.css";
import movieNames from 'movies-names';

export default function App() {
  console.log(movieNames.random())
  const API_KEY = 'cYY2RGnMz0QbUuZwah7huztQSLrRZ2mE';
  const [ gif, setGif ] = useState('');

  const getGif = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    const data = await response.json()
    setGif(data.data.images.original.url)
  }

  useEffect(() => getGif(), [])

  return (
    <div className="App">
      <h1>React Giphy</h1>
      <hr />
      <Form getGif={getGif}/>
      <GifDisplay gif={gif}/>
    </div>
  );
}
