import React, { Component } from "react";
import axios from "axios";

class CloveCocktail extends Component {
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
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail")
      .then((res) => {
        const cocktails = res.data.drinks;

        this.setState({
          data: cocktails,
          id: cocktails[3].idDrink,
          picture: cocktails[3].strDrinkThumb,
          name: cocktails[3].strDrink,
          directions: cocktails[3].strInstructions,
          ingredients1: cocktails[3].strIngredient1,
          ingredients2: cocktails[3].strIngredient2,
          ingredients3: cocktails[3].strIngredient3,
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
      </div>
    );
  }
}

export default CloveCocktail;
