import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NoteForm from './components/NoteForm'
import NoteSingle from './components/NoteSingle'
import NotesMain from './components/NotesMain'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1537805881051,
          title: "1. Get a backpack",
          text: "Find a Jansport backpack that can hold all your gear.",
          tags: ["gear", "capacity"]
        },
        {
          id: 1537805891197,
          title: "2. Grab a buddy",
          text: "Find an outdoorsy friend that loves to camp.",
          tags: ["outsdoorsy", "friend"]
        }
        
      ],

      filteredNotes: [],
    tags: ["all", "gear", "capacity", "nature", "outdoors", "outsdoorsy", "friend", "hiking groups", "store", "adventure"],
    noteUpdate: null
  }
      addNote = (newNote) => {
        let filteredTags = [...newNote.tags].filter(excluded => ![...this.state.tags].includes(excluded))
        this.setState({ notes: [ ...this.state.notes, newNote], tags: [...this.state.tags, ...filteredTags] })
    }
    
      editNote = (noteId) => {
        this.setState({ noteUpdate: this.state.notes.filter(note => note.id === noteId)[0] })
      }

      updateNote = (targetNote) => {
        let currentList = this.state.notes.filter(note => note.id !== targetNote.id)
        let updatedNote = this.state.notes.filter(note => note.id === targetNote.id)[0]
        updatedNote.title = targetNote.title
        updatedNote.text = targetNote.text
        updatedNote.tags = targetNote.tags
        const notes = [...currentList, updatedNote]
        this.setState({ notes })
      }
    
      deleteNote = (noteId) => {
        this.props.history.push
      }

  render() {
    return (
      <div1 className="App">
        <Route exact path="/" render={() => 
          <NotesMain
            notes={this.state.notes}
            filteredNotes={this.state.filteredNotes}
            tags={this.state.tags}
            filterNotes={this.filterNotes}
          />
        }/>
        <Route path="/new" render={() => 
          <NoteForm
            addNote={this.addNote}
          />
        }/>
        <Route exact path="/notes/:id" render={(props) => 
          <NoteSingle
            {...props}
            notes={this.state.notes}
            editNote={this.editNote}
            deleteNote={this.deleteNote}
          />
        }/>
        <Route path="/notes/:id/edit" render={() => 
          <NoteForm
            noteUpdate={this.state.noteUpdate}
            updateNote={this.updateNote}
          />
        }
        />
      </div1>
    );
  }
}
  

export default withRouter(App);
