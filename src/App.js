import React from "react";
import Wine from "./components/Margarita";
import { BrowserRouter as Router, Switch, /* Route */ } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Wine />
        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
