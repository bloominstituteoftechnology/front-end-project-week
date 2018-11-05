import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Notes from './components/Notes'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  componentDidMount = () => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`).then(response => {
      this.setState({ notes: response.data });
    });
    // axios.post(`https://fe-notes.herokuapp.com/note/create`, notes)
    // .then(response => {
    //     this.setState({notes: response.data})
    // })
    // .catch(err => {
    //     console.log(err)
    // })
  };

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <HomePage {...props}/>} />
        <Route path="/notes" render={props => <Notes {...props} notes={this.state.notes}/>} />
      </div>
    );
  }
}

export default App;
