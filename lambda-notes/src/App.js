import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { ListView, NoteView, Sidebar, CreateNoteView } from './Views';


const URL = 'https://fe-notes.herokuapp.com'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      currentNote: '',
      currentPath: '/'
    }
  }
  getNote = id => {
    if (id === undefined) {
      if (this.state.currentNote === '') {
        return { title: 'no notes', textBody: 'Nope no notes here' }
      } else {
        return this.state.currentNote
      }
    } else {
      return this.state.notes.find(note => note._id === id)
    }
  }
  setNote = (note, i) => {
    this.setState(prevState => ({
      notes: prevState.notes[i]
    }))
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
          .catch(err => {
            console.log(err)
          })
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
                  {...props}
                  notes={this.state.notes}
                  match={props.match}
                  findNote={this.findNote}
                />
              )
            }}
          />
          <Route 
            path='/create'
            component={CreateNoteView}/>
          <Route
            exact
            path='/'
            render={(props) => (
              <ListView
                {...props}
                setNote={this.setNote}
                notes={this.state.notes} />
            )}
          />


        </div>

      </div>
    );
  }
}



export default App;
