import React from 'react';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchBox: 'search box here',
            searchButton: 'search',
            mapHolder: 'map placeholder - div that will holder an embedded map',
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
                <div>
                    {this.state.searchBox}
                    <button>{this.state.searchButton}</button>
                </div>
                    {this.state.mapHolder}
                <div>

                </div>
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

export default  Main;
