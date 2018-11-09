import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

import Note from './Components/Note';
import NoteList from './Components/NoteList';
import Menu from './Components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        title: '',
        textBody: '',
      },
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("Error getting notes data.", error);
      });
  }
  
  deleteNote = (e, id) => {
    e.preventDefault();
  
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        this.setState({notes: response.data})
        this.props.history.push('/');
      })
      .catch(error => {
        console.error("Failed to delete note.", error);
      })
  }

  render() {
    return (
      <div className="App">
        <Route
          exact path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/note/:_id"
          render={props => <Note {...props} notes={this.state.notes} />}
        />
        <Menu />
      </div>
    );
  }
}

export default App;
