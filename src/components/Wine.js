import React, { Component } from "react";
import axios from "axios";

class Wine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wines: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => {
        this.setState({
          wines: res.data.drinks,
        });

        console.log(res.data.drinks);
        return this.state.wines.map(wine => <li key={wine.id}>
            
        </li>);
      })
      .catch((error) => {
        return error;
      });
  }

  render() {
    return (
      <div>
        <ul className="list-styling">
   
        </ul> 
      </div>
    );
  }
}

export default Wine;
