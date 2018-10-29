import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NotesList from './components/NotesList'
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {
        id: '',
        title: '',
        textBody: ''
      }
    }
  }
  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className='App'>
        <div className="navigation">
          <NavLink exact to="/">View Your Notes</NavLink>
          <NavLink to="/create-note">+ Create New Note</NavLink>
        </div>

        <Route
          exact path="/"
          render={props => <NotesList {...props}
          notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
