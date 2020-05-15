import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1> I am the posting feature! </h1>
                <form >
                    <input type="text"/>
                    <input type="image"/>
                    <input type="text"/>
                </form>
            </div>
         );
    }
}
 
export default Post;