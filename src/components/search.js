import React from 'react';

//TODO: pass infomation to Map

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            queury : ''
        }
    }

    handleSumbit = e =>{
        alert('You have hit the search button')
    }

    render(){
        return(
         <form onSubmit = {this.handleSumbit}> 
            <input value = {this.state.query}></input>
            <button>search</button>
        </form>
        )
       
    }
}

export default SearchForm;