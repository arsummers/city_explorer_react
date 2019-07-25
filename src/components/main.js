import React from 'react'; 
import SearchForm from './search';
import Maps from './map.js';
import SearchResults from './result.js'


class Main extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            location: {
                "search_query": "barcelona",
                "formatted_query": "Barcelona, Spain",
                "latitude": 41.3850639,
                "longitude": 2.1734035
                }
        }
    }

    searchEntered = query =>{
        // DO API STUFF HERE
        
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
