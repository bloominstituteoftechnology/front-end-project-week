import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { ListView } from './Views.js';


const URL = 'https://fe-notes.herokuapp.com'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    this.getAllNotes()
  }

  getAllNotes = () => {
    axios
      .get(URL + '/note/get/all')
      .then( data => {
        this.setState({
          notes: data.data
        })
        .catch( err => {
          console.log(err)
        })
      })
  }
  render() {
    return (

        <div className="App">
          <ListView notes={this.state.notes}/>
        </div>
    );
  }
}

export default App;
