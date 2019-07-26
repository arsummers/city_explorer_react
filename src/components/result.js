import React from 'react'; 
import Forecasts from './api_calls/forecasts.js';
import Movies from './api_calls/movies.js';
import Events from './api_calls/events.js';
import Trails from './api_calls/trails';

export default props =>(
    <>
    <Forecasts data={props.forecasts}/>
    <Movies data={props.movies}/>
    <Events data={props.events}/>
    <Trails data={props.trails}/>
    </>
)
