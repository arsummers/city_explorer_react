import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            queury : ''
        }
    }

    handleInput = e =>{
        this.setState({
            query : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.props.handleSubmit(this.state.query)
    }

    render(){
        return(
         <form onSubmit = {this.handleSubmit}> 
            <input value = {this.state.query} onChange = {this.handleInput}></input>
            <button>search for a city</button>
        </form>
        )
       
    }
}

export default SearchForm;