import React, { Component }from 'react'; 
import SearchForm from './search';
import Maps from './map.js';
import SearchResults from './result.js'
import superagent from 'superagent';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            location: null,
            forecasts : [],
            movies : [],
            events : [],
            yelp : [],
            trails : []
        }
    }

    searchEntered = query =>{
        // how take in query???????     
        alert(query)   
    }

    render(){
        return (
            <>
                <SearchForm handleSubmit = {this.searchEntered}/>
                <Maps />
                <SearchResults />
            </>

        )
    }
}

export default  Main;
