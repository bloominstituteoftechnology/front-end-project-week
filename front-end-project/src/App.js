import React, { Component } from 'react';
import MainPage from './MainPage';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';


class App extends Component {


  render(){
    return (
      <div>
        <MainPage/>
      </div>
    )
  }
}




export default App;