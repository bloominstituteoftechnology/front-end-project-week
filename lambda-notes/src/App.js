import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'; 
import Notes from './components/Notes'; 
import axios from 'axios'; 

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({notes: response.data})
      })
        .catch(err => console.log(err)); 
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div> 
        <div className="notes-container">
          <Notes notes={this.state.notes} /> 
        </div> 
      </div>
    );
  }
}

export default App;
