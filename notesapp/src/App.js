import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavBar/NavBar'
import {AppDiv} from './Styles/AppStyles'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }



  render() {
    return (
      <AppDiv>
       <NavigationBar />
      </AppDiv>
    );
  }
}

export default App;
