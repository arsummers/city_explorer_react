import React from 'react'; 
import Forecasts from './api_calls/forecasts.js'


export default props =>(
    <>
    <Forecasts data={props.forecasts}/>
    </>
)
