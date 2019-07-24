import React from 'react'; 
import Search from './search';
import Maps from './map';
import Result from './result'


class Main extends React.Component{

    render(){
        return (
            <React.Fragment>
                <Search />
                <Maps />
                <Result />
            </React.Fragment>

        )
    }
}

export default  Main;
