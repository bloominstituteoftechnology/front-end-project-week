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


const URL = 'https://fe-notes.herokuapp.com'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
    }
    console.log(this.state)
  }

  componentDidMount() {
    this.getAllNotes()
  }

  getAllNotes = () => {
    axios
      .get(URL + '/note/get/all')
      .then(data => {
        this.setState({
          notes: data.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  createNote = note => {
    axios
      .post(URL + '/note/create', note)
      .then(data => {
        const newNote = {
          _id: data.data.success,
          title: note.title,
          textBody: note.textBody
        }
        this.setState(prev => {
          return {
            notes: [...prev.notes, newNote]
          } 
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  editNote = note => {
    axios
      .put(URL + '/note/edit/' + note._id, note)
      .then(data => {
        console.log('edit response', data)
        this.setState(prev => {
          const editedIndex = prev.notes.indexOf(n => (
                n._id == note._id
              ))
          prev.notes[editedIndex] = data.data
          console.log('editied state vars', editedIndex, data.data)
          return prev
        })
      })
      .catch(err => {
        console.log(err)
      })
  }



  findNote = (id) => {
    console.log(this.state.notes.find(note => (
      note._id === id
    )))
    return (
      this.state.notes.find(note => (
        note._id === id
      ))
    )
  }
  render() {
    return (

      <div className="App">
        <Sidebar />


        <div className="page-wrapper">

          <Route
            path={'/note/:id'}
            render={(props) => {

              console.log(props)
              return (
                <NoteView
                  exact
                  {...props}
                  notes={this.state.notes}
                  match={props.match}
                  findNote={this.findNote}
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
