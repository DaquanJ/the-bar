import React, { Component } from "react";
import Margaritas from "./Margaritas";
import Cocktails from "./Cocktails";

class Drinks extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Margaritas</h1>
        <Margaritas />
        <h1> Cocktails </h1>
        <Cocktails />
      </div>
    );
  }
}

export default Drinks;
