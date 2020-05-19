<<<<<<< HEAD
import React from 'react';
//import {SearchBar} from 'react-native-elements';
import './App.css';
//import axios from 'axios';
import Header from './components/Header'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'


function App() {
  return (
    <div className="App">
      <Header />
     <div id="searchbar">
            <input name="text" type="text" />
            <button>search for your cocktail</button>
          </div>

          <div id="header2">
            <h3>Today's Top Drinks!</h3>
          </div>
=======
import Header from "./components/Header";
import React from "react";
import Drinks from "./components/Drinks";
import BlueMargarita from "./components/BlueMargarita";
import Margarita from "./components/Margarita";
import TommyMargarita from "./components/TommyMargarita";
import WhiteMargarita from "./components/WhiteMargarita";
import TurfCocktails from "./components/TurfCocktails";
import AbbeyCocktail from "./components/AbbeyCocktail";
import AlfieCocktail from "./components/AlfieCocktail";
import CloveCocktail from "./components/CloveCocktail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="searchbar">
          <input name="text" type="text" />
          <button className="button">search for your cocktail</button>
        </div>
>>>>>>> a3bf09f0e7113c0c8fed888ec5f3944c929231dc

        <div id="header2">
          <h3>Today's Top 5!</h3>
        </div>
        <Switch>
          <Route path="/" exact component={Drinks} />
          <Route path="/11007" component={Margarita} />
          <Route path="/11118" component={BlueMargarita} />
          <Route path="/17216" component={TommyMargarita} />
          <Route path="/16158" component={WhiteMargarita} />
          <Route path="/12418" component={TurfCocktails} />
          <Route path="/17834" component={AbbeyCocktail} />
          <Route path="/11019" component={AlfieCocktail} />
          <Route path="/11255" component={CloveCocktail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
