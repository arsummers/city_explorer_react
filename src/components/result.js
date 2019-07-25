import React from 'react'; 
import Forecasts from './api_calls/forecasts.js'
import Movies from './api_calls/movies.js'

export default props =>(
    <>
    <Forecasts data={props.forecasts}/>
    <Movies data={props.movies}/>
    </>
)
