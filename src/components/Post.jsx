import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userRecipes: [
                {id: 1 },
                {name: []},
                {ingredients: ''},
                {ingredients1: ''},
                {ingredients2: ''}
            ]
         }
    }

    newCocktails = () => {
        document.getElementById('name').innerHTML = this.state.name;
        document.getElementById('ingredient').innerHTML = this.state.ingredients;
        document.getElementById('ingredient1').innerHTML = this.state.ingredients1;
        document.getElementById('ingredient2').innerHTML = this.state.ingredients2;
        document.getElementById('1').style.display = 'block';
        this.setState({id: this.state.userRecipes.length + 1})
        console.log(this.state);
    }

    // onDeleteHandle = () => {
    //     let id = arguments[0];
    // }

    // deleteCocktails = (id) => {
    //    const deletedCocktails = this.state.userRecipes.filter(item => item.id !== id);
    //     this.setState({userRecipes: deletedCocktails});
    //     console.log(this.state)
    // }
    updateCocktails = () => {
        document.getElementById('name').innerHTML = this.state.name;
        document.getElementById('ingredient').innerHTML = this.state.ingredients;
        document.getElementById('ingredient1').innerHTML = this.state.ingredients1;
        document.getElementById('ingredient2').innerHTML = this.state.ingredients2;
        document.getElementById('1').style.display = 'block';
        this.setState({id: this.state.userRecipes.length})
        console.log(this.state);
    }
    deleteCocktails = () => {
        let myObject = document.getElementById('1');
        myObject.remove();
    }

    // handleIngredients = (e) => {
    //     this.setState({ingredients: e.target.value})
    // }
    
    render() { 
   
        return ( 
            <div className="post">
                <h1> Add your Drinks! </h1>
                <form onSubmit = {e => e.preventDefault()} >
                    <h3>Name</h3>
                    <input type="text" onChange={ e => {this.setState({name: e.target.value})} }  className="post"/>
                    <h3>Ingredients</h3>
                    <input type="text" onChange={ e => {this.setState({ingredients: e.target.value})} }  className="post"/>
                    <input type="text" onChange={ e => {this.setState({ingredients1: e.target.value})} } className="post"/>
                    <input type="text" onChange={ e => {this.setState({ingredients2: e.target.value})} } className="post"/>
                    <input type="submit" value='add your cocktail' onClick = {this.newCocktails} className="post"/>
                    <button onClick={this.updateCocktails} className="post"> update Cocktail </button>
                    <button onClick={this.deleteCocktails} className="post"> delete Cocktail </button>
                </form>
                <ul id='1' style={{display: 'none'}} >
                    <li id = 'name'></li>
                    <li id = 'ingredient'></li>
                    <li id = 'ingredient1'></li>
                    <li id = 'ingredient2'></li>
                </ul>
            </div>
         );
    }
}
 
export default Post;