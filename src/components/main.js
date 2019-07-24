import React from 'react'; 
import SearchForm from './search';
import Maps from './map.js';
import SearchResults from './result.js'


class Main extends React.Component{

    render(){
        return (
            <React.Fragment>
                <SearchForm />
                <Maps />
                <SearchResults />
            </React.Fragment>

        )
    }
}

export default  Main;
