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

          {/* ### Display Notes ### */}
          <Route
            exact
            path="/"
            render={() => <Notes notes={this.state.notes.reverse()} />}
          />

          {/* ### Display Single Note ###  */}

          {/* ### Add Notes ###  */}
          <Route path="/submit" component={NoteForm} />
          {/* displays notes under add note form so you can see whats been added or reply to something */}
         <Notes notes={this.state.notes} />

          {/* ### Edit Notes ###  */}

        </div>
      </div>
    );
  }
}

export default App;