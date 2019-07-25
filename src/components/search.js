import React from 'react';

//TODO: pass infomation to Map

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            queury : ''
        }
    }

    handleChange = e =>{
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
            <input value = {this.state.query} onChange = {this.handleChange}></input>
            <button>search</button>
        </form>
        )
       
    }
}

export default SearchForm;