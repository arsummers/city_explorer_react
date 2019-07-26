import React from 'react'; 
import Forecasts from './api_calls/forecasts.js';
import Movies from './api_calls/movies.js';
import Events from './api_calls/events.js';
import Trails from './api_calls/trails';
// import Reviews from './api_calls/yelp';

export default props =>(
    <>
    <Forecasts data={props.forecasts}/>
    <Movies data={props.movies}/>
    <Events data={props.events}/>
    <Trails data={props.trails}/>
    {/* <Reviews data={props.reviews}/> */}
    </>
)
