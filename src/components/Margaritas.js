import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Margaritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wines: [],
      data: [],
      picture: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => {
        const margaritas = res.data.drinks;

        this.setState({
          data: margaritas,
          picture: margaritas[0].strDrinkThumb,
          picture1: margaritas[1].strDrinkThumb,
          picture2: margaritas[2].strDrinkThumb,
          picture3: margaritas[3].strDrinkThumb,
        });

        console.log(res.data.drinks);
        return this.state.wines.map((wine) => <li key={wine.id}></li>);
      })
      .catch((error) => {
        return error;
      });
  }

  render() {
    return (
      <div>
        <ul className="list-styling"></ul>
        <Link to="/11007">
          <img src={this.state.picture} alt="margarita" width="250px"></img>
        </Link>
        <Link to="/11118">
          <img src={this.state.picture1} alt="margarita1" width="250px"></img>
        </Link>
        <Link to="/17216">
          <img src={this.state.picture2} alt="margarita" width="250px"></img>
        </Link>
        <Link to="/16158">
          <img src={this.state.picture3} alt="margarita" width="250px"></img>
        </Link>{" "}
        <br></br>
      </div>
    );
  }
}

export default Margaritas;
