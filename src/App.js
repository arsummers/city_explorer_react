import React from 'react';
import Header from './header';
import Main from './main';
import Search from './search';
import Maps from './map';
import logo, { ReactComponent } from './logo.svg'; 
import './App.css';

class CityExplorerReact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thing: 'idk something'
    }
  }


  render(){
    return(
      <div>
        {this.state.thing}
      </div>
    )
  }  

}


class App extends React.Component {
  render(){
    return(
      <React.Fragment>
         <Header />
         <Main />
         <Search />
         <Maps />
      </React.Fragment>  
      
    )
  }
}


export default App;
