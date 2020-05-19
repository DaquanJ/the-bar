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

    </div>
  );
}


export default App;
