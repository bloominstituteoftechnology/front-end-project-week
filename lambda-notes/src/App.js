import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({notess: response.data}))
      .catch(err => console.log(err))
  }

  postSmurf = (newNote) => {
    axios
      .post(API, newNote)
      .then(res => this.setState({ notes: res.data }, this.props.history.push('/')))
      .catch(err => {console.log(err)});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
