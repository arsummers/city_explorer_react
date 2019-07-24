import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prompt: 'Search A City'
        }
    }

    handleSumbit = () =>{
        alert('You have hit the search button')
    }

    render(){
        return(
         <form onSubmit = {this.handleSumbit}> 
            <button>{this.props.prompt}</button>
        </form>
        )
       
    }
}

export default Search;