import React, { Component } from "react";
import axios from "axios";

class Margarita extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: [],
      id: "",
      picture: "",
      name: "",
      directions: "",
      ingredients: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => {
        const margarita = res.data.drinks;

        this.setState({
          data: margarita,
          id: margarita[0].idDrink,
          picture: margarita[0].strDrinkThumb,
          name: margarita[0].strDrink,
          directions: margarita[0].strInstructions,
          ingredients1: margarita[0].strIngredient1,
          ingredients2: margarita[0].strIngredient2,
          ingredients3: margarita[0].strIngredient3,
          ingredients4: margarita[0].strIngredient4,
        });
      })

      .catch((error) => {
        console.log("there is an error", error);
      });
  }

  render() {
    return (
      <div>
        <img src={this.state.picture} alt="" width="300px"></img>
        <h3>Name: {this.state.name}</h3>
        <h3>Directions: {this.state.directions}</h3>
        <h3>Ingredients: {this.state.ingredients1}</h3>
        <h3>Ingredients: {this.state.ingredients2}</h3>
        <h3>Ingredients: {this.state.ingredients3}</h3>
        <h3>Ingredients: {this.state.ingredients4}</h3>
      </div>
    );
  }
}

export default Margarita;
