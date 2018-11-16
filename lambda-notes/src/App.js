import React, { Component } from 'react';
import NoteList from './components/NoteList';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NewNote from './components/NewNote'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

componentDidMount() {
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      const notes = response.data;
      this.setState({notes});
    })
    .catch(err=> {
      console.log(err)
    });
}

  render() {
    return (
      <Router>
      <div className="App">
      <nav>
      <Sidebar/>
      <NavLink to = '/new-note'>Create Note</NavLink>
      <NavLink to = '/'>Home</NavLink>
      </nav>
      <Route exact path='/' render={() => <NoteList notes={this.state.notes} />} /> 
      <Route path='/new-note' component={NewNote} />
       </div>
       </Router>
     );
   }
 }

export default App;