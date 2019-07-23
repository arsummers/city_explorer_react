import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header:"City Explorer",
            paragraph:"Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.header} </h1>
                <p>{this.state.paragraph}</p>
            </div>
            
        );
    }
}


export default Header;