import './App.css'

import axios from 'axios'
import React, { Component } from 'react'

import logo from './logo.svg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(res => {
        this.setState({
          notes: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
