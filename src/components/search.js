import React from 'react';
import superagent from 'superagent';


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

    handleSubmit = async e =>{
        e.preventDefault()

        // want to get the url I got from the back-end I built integrated into here instead of this one, but that backend's degraded since I touched it last week, so I'm not sure how to progress from here.
        
        let data = await superagent.get('https://maps.googleapis.com/maps/api/geocode/json?address=${this.query}&key=${GEOCODE_API_KEY}')
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