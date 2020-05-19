import React from 'react';
import './components/SearchBar';
import './App.css';
//import axios from 'axios';
import Header from './components/Header'



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

    </div>
  );
}


export default App;
