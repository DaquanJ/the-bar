import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userRecipes: [
                {name: ''},
                {images: []}, 
                {ingredients: ''}
            ]
         }
    }

    
    render() { 
        return ( 
            <div>
            {this.state.userRecipes.map(cocktail => ( 
                <div>
                    <h3> {cocktail.name} </h3>
                    <img src={cocktail.images} alt=""/>
                    <p> {cocktail.ingredients} </p>
                </div>
                ))}
                <h1> I am the posting feature! </h1>
                <form onSubmit = {e => e.preventDefault()} >
                    <h3>Name</h3>
                    <input type="text" onChange={ e => {this.setState({name: e.target.value})} } />
                    <input type="image" alt=''/>
                    <h3>ingredients</h3>
                    <input type="submit" value='+' />
                    
                </form>
            </div>
         );
    }
}
 
export default Post;