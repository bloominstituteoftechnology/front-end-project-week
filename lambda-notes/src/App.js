import React, { Component } from 'react';

import './App.css';
import { Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteCard from "./components/NoteCard";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import Note from "./components/Note";




class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
      },
      {
        id: 1,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
      },
      {
        id: 2,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
      },
      {
        id: 3,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
      },
      {
        id: 4,
        title: 'Note Title',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
      },
    ],
    addTitle: '',
    addBody: ''
  }
  handleInputChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }
  handleAddNote = event => {
    event.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({id: this.state.notes.length, title: this.state.addTitle, body: this.state.addBody});
    this.setState({notes, addTitle: '', addBody: ''});
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' render={props => <NoteList {...props} notes={this.state.notes} />}/>
        <Route path='/note/:id' render={props => <Note {...props} notes={this.state.notes} />} />
        <Route path='/NewNote' render={props =>
          <NewNote {...props} notes={this.state.notes} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} addTitle={this.state.addTitle} addBody={this.state.addBody}/>
        } />
      </div>
    );
  }
}

export default App;
