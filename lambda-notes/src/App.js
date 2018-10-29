import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/nav/NavBar'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  componentDidMount () {
    axios 
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response);
        this.setState({notes: response.data})
      }) 
      .catch (error => {
        console.log.error('Error', error);
      })
  }


  render() {
    return (
      <div className="App">
       <NavBar />
      
      </div>
    );
  }
}

export default App;
