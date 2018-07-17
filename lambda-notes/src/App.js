import React, { Component } from 'react';

import './App.css';
import { Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteCard from "./components/NoteCard";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import Note from "./components/Note";




class App extends Component {
  constructor() {
    super()
    this.state={
      notes: [{
        id: 0,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
      }, {
        id: 1,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. .'
      }, {
        id: 2,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. .'
      }, {
        id: 3,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. .'
      }, {
        id: 4,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. .'
      }, {
        id: 5,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
      }]
    }
  }

  NewNote = (e, note) => {
    e.preventDefault();
    const notes = this.state.notes;
    this.setState({notes: notes.concat(note)});
  }



  render() {
    const notes = this.state.notes;
    return (
      <div className="App">
      <Navbar />
      <Route exact path="/" render={props => <NoteList notes={notes}/>}/>
      <Route path="/:id" render={props => <Note {...props} notes={notes}/>}/>
      <Route path="/NewNote" render={props => <NewNote NewNote={this.NewNote} />}/>
      </div>
    );
  }
}

export default App;
