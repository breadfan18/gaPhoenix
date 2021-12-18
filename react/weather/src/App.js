import React from "react";
import data from './weatherData'
import WeatherForecast from "./components/WeatherForecast";
import "./App.css";

console.log(data)

export default function App() {
  const weatherCards = data.map((weather, index) => {
    return <WeatherForecast 
      key={index}
      {...weather}
    />
  })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section className="weatherCards">{weatherCards}</section>
    </div>
  );
}
