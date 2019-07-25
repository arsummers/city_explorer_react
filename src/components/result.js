import React from 'react'; 

// going to need component for each API call

class SearchResults extends React.Component {
    constructor(props){
        super(props);
        this.state={
            darkSkyHolder: 'Dark Sky API',
            yelpHoder: 'Yelp API',
            eventsHolder: 'Events API',
            moviesHolder: 'Movies API',
            trailsHolder: 'Trails API'
        }
    }

    render(){
        return (
            <div>
                <section>
                    {this.state.darkSkyHolder}
                </section>
                <section>
                    {this.state.yelpHoder}
                </section>
                <section>
                    {this.state.eventsHolder}
                </section>
                <section>
                    {this.state.moviesHolder}
                </section>
                <section>
                    {this.state.trailsHolder}
                </section>
            </div>
        )
    }
}

export default SearchResults;
