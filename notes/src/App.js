import React, { Component } from 'react';
import axios from 'axios';

import ListView from './components/ListView/ListView'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

    componentDidMount() {
      axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
      })
    }

 
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ListView notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
