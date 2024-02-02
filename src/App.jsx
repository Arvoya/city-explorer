import React from 'react';
import Header from './components/Header';
import Explore from './components/Explore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*
TODO Make background move from layered haikei[1]-[2]
 */
class App extends React.Component {

  render() {
    
    return (
      <>
      <Header/>
      <Explore/>
      </>   
    )
  }
}

export default App
