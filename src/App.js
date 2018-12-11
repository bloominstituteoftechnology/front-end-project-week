import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { 
  ListView, 
  NoteView, 
  Sidebar, 
  CreateNoteView,
  EditNoteView
} from './Views';

const URL = process.env.REACT_APP_API_URL

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      draftNote: {
        title: '',
        content: ''
      },
      loadingNotes: false
    }
    console.log(this.state)
    setInterval(this.getAllNotes, 5000)
  }

  componentDidMount() {
    this.getAllNotes()
  }

  componentDidUpdate() {
    // live reload of data
    // updates too fast
    // this.getAllNotes()
  }

  getAllNotes = async () => {
    try {
      await this.setState({loadingNotes: true})
      const notes = await axios.get(URL + '/notes')
      await this.setState({
        loadingNotes: false,
        notes: notes.data.reverse()
      })
    }
    catch (err) {
        console.log(err)
    }
  }

  createNote = note => {
    axios
      .post(URL + '/notes', note)
      .then(data => {
        const newNote = {
          id: data.data.success,
          title: note.title,
          content: note.content
        }

        this.setState(prev => {
          let tempDraft = prev.draftNote;
          if (newNote.title === tempDraft.title) {
            tempDraft = {
              title: '',
              content: ''
            }
          }
          return {
            notes: [newNote, ...prev.notes],
            draftNote: {
              title: '',
              content: ''
            } 
          } 
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  editNote = note => {
    axios
      .put(URL + '/notes/' + note.id, note)
      .then(data => {
        console.log('edit response', data)
        const matchIds = n => n.id == data.data.id
        this.setState(prev => {
          // const newNote = JSON.parse(JSON.stringify(data.data))
          const editedIndex = prev.notes.findIndex(matchIds)
          prev.notes[editedIndex] = data.data
          console.log('editied state vars', editedIndex, data.data)
          return { notes: prev.notes }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteNote = note => {
    axios
      .delete(URL + '/notes' + note.id)
      .then(data => {
        console.log('baleted!', data)
        const filterNote = n => n.id !== note.id
        this.setState(prev => {
          return { notes: prev.notes.filter(filterNote) }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <Sidebar loading={this.state.loadingNotes}/>
        <div className="page-wrapper">

          <Route
            path={'/note/:id'}
            render={(props) => {

              console.log(props)
              return (
                <NoteView
                  
                  {...props}
                  notes={this.state.notes}
                  note={
                    this.state.notes.find(note => (
                      note.id == props.match.params.id)
                    )
                  }
                  deleteNote={this.deleteNote}
                />
              )
            }}
          />

          <Route 
            path='/note/create'
            render={props => (
              <CreateNoteView 
                {...props}
                onSubmit={this.createNote}  
              />
            )}
          />
          <Route 
            path='/note/edit/:id'
            render={props => (
              <EditNoteView 
                {...props}
                note={
                  this.state.notes.find(note => (
                    note.id == props.match.params.id)
                  )
                }
                onSubmit={this.editNote}  
              />
            )}
          />

          <Route
            exact
            path='/'
            render={(props) => (
              <ListView
                {...props}
                notes={this.state.notes} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;