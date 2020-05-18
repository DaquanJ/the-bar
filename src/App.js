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
