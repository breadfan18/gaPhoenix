// IMPORT useState
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom"
import allStocks from './stockData';
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Stock from './components/Stock';
import Header from './components/Header';

export default function App() {
  const [ stocks, setAllStocks ]  = useState(allStocks);


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path="/stocks/:id" render={(rp) => <Stock stocks={stocks} {...rp}/>} />
        <Route exact path='/stocks'>
          <Dashboard 
            stocks={stocks}
          />
        </Route>

      </Switch>
    </div>
  );
}
