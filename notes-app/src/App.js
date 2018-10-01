import React, { Component } from 'react';
import router, { Link } from 'react-router';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    notes: [],
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then( res => (
        console.log(res)
        // this.setState({ notes: res.data })
      ))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Note Taker </h1>
          {/* <Link>Notes</Link>
          <Link>Make</Link> */}
        </header>
      </div>
    );
  }
}

export default App;
