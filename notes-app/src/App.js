import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { withRouter } from "react-router-dom";
import './App.css';
import axios from 'axios'
import NoteForm from './components/NoteForm'
import Note from './components/Note'
import NotesMain from './components/NotesMain'
import SideBar from './components/SideBar'

class App extends Component {
  state = {
      notes: [],

    filteredNotes: [],
    tags: ["all", "gear", "capacity", "nature", "outdoors", "outsdoorsy", "friend", "hiking groups", "store", "adventure"],
    noteUpdate: null
  }
  componentDidMount() {
    this.getNotesFromAPI()
  }

  componentDidUpdate() {
    setTimeout(this.getNotesFromAPI, 5000)
  }

  getNotesFromAPI = () => {
    axios.get('http://localhost:7777/api/notes/')
      .then(resp => this.setState({ notes: resp.data }))
      .catch(err => console.log(err))
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
        this.props.history.push("/")
        this.setState({ notes: this.state.notes.filter(note => note.id !== noteId) })
      }

      filterNotes = (e, tagName) => {
        e.preventDefault()
    
        if (tagName === "all") { 
          const filteredNotes = [...this.state.notes]
          this.setState({ filteredNotes })
        } else {
          const filteredNotes = [...this.state.notes].filter(note => note.tags.includes(tagName))
          this.setState({ filteredNotes })
        }
    
      }

  render() {
    return (
      <Div1 className="App">
      <SideBar />
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
          <Note
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

        {/*<GlobalStyle />*/}
      </Div1>
    )
  }
}
  
{/* const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  .App {
    width: 100%;
    max-width: 888px;
    margin: 0 auto;
    border: 1px solid #D6D5D6;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.3rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  button {
    background-color: #24B8BD;
    color: white;
    font-size: 1.5rem;
    width: 190px;
    padding: 5%;
    border-radius: 2px;
  }
`
*/}
const Div1 = styled.div`
  display: flex;
`


export default withRouter(App);
