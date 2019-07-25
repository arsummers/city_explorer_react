import React, {Component}  from 'react';
import Header from './components/header';
import Main from './components/main';
import './App.css';



class App extends Component {
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
