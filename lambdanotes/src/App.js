import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
        list: [],
        note: {},
    }
  };

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ list: response.data }))
      .catch(error => console.log(error))
  };

  render() {
    return (
      <div className="App">
        NOTES
        <ListView />
        <Note />
      </div>
    );
  };
};

export default App;
