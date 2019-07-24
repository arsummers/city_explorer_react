import React from 'react';
import Header from './header';
import Main from './main';

import logo, { ReactComponent } from './logo.svg'; 
import './App.css';



class App extends React.Component {
  render(){
    return(
      <React.Fragment>
         <Header />
         <Main />
      </React.Fragment>  
      
    )
  }
}


export default App;
