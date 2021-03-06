import React, { Component }from 'react'; 
import SearchForm from './search';
import Map from './map.js';
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
            trails : [],
            // reviews : []

        }
    }

    async getDataFromAPI(urlBase, location, resourceName){
        const queryBitsForUrl = `data[formatted_query]=${location.formatted_query}&data[latitude]=${location.latitude}&data[longitude]=${location.longitude}&data[search_query]=${location.search_query}`;

        const fullUrl = `${urlBase}/${resourceName}?${queryBitsForUrl}`;

        const response = await superagent.get(fullUrl);

        return response.body
    }


    handleSearch = async query =>{
        const url = 'https://jb-flask-hello-world.onrender.com'

        const locationData = await superagent.get(`${url}/location?data${query}`)

        const location = {
            search_query : query,
            formatted_query : locationData.body.formatted_query,
            latitude : locationData.body.latitude,
            longitude : locationData.body.longitude
        }

        const forecasts = await this.getDataFromAPI(url, location, 'weather');
        const movies = await this.getDataFromAPI(url, location, 'movies');
        const events = await this.getDataFromAPI(url, location, 'events');
        const trails = await this.getDataFromAPI(url, location, 'trails');
        // const reviews = await this.getDataFromAPI(url, location, 'reviews');

        this.setState({
            location,
            forecasts,
            movies,
            events,
            trails,
            // reviews
        })
    }


    render(){
        return (
            <>
                <SearchForm handleSearch = {this.handleSearch}/>
                {this.state.location && (
                    <>
                    <Map latitude={this.state.location.latitude} longitude={this.state.location.longitude}/>
                    </>
                )}
                <SearchResults 
                forecasts={this.state.forecasts}
                movies={this.state.movies}
                events={this.state.events}
                trails={this.state.trails}
                // reviews={this.state.reviews}
                />
            </>

        )
    }
}

export default  Main;
