import React, { Component } from 'react';
import './App.css';

import Notelist from './components/Notelist'
import Noteform from './components/Noteform'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({notes: response.data }));
      })
      .catch(err => {
        console.error("Could not retrieve notes.", err)
      })
  }
  render() {
    return (
      <div className="App">
        <Notelist 
          notes= {this.state.notes} />
        <Noteform />        
      </div>
    );
  }
}

export default App;
