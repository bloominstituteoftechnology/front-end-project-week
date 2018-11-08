import React, { Component } from 'react';
import axios from 'axios';
import  { Route } from 'react-router-dom';

import Note from './components/Note';
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import NoteEdit from './components/NoteEdit';
import Nav from './components/Nav';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

     this.state = {
      notes: [],
      id: "",
    };
  }
  
   componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .then(console.log(this.state.notes))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <div className="content">
          {/* d i s p l a y   n o t e s */}
          <Route
            exact
            path="/"
            render={() => <Notes notes={this.state.notes.reverse()} />}
          />
          {/* a d d  n o t e  */}
          <Route path="/submit" component={NoteForm} />
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;