import React, { Component } from 'react';
import Margaritas from './Margaritas';
import Cocktails from './Cocktails'

class Drinks extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Margaritas />
            <Cocktails />
        </div> );
    }
}
 
export default Drinks;