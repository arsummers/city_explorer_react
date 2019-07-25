import React from 'react'; 

export default (props) =>(
    <>
    <h1>Map</h1>
    <ul>
        <li>Latidude: {props.latitude}</li>
        <li>Longitude: {props.longitude}</li>
    </ul>
    </>
);
