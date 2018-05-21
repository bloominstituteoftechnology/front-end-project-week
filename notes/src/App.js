import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import SideBar from './components/Sidebar'
import NoteList from './components/NoteList'
import Notes from './notes'
import Note from './components/Note'
import CreateNote from './components/CreateNote'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Notes,
      title: '',
      text: ''
    }
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    let newNotes = [...this.state.notes]
    newNotes.push({ title: this.state.title, text: this.state.text, id: this.state.notes.length })
    this.setState({
      notes: newNotes,
      title: '',
      text: ''
    })
  }
  delete = (id) => {
    let newNotes = this.state.notes.filter((e, i) => e.id !== id)
    this.setState({
      notes: newNotes,
    })
  }
  render() {
    // console.log("state", this.state)
    return (
      <div className="wrapper">
        <Route path="/" component={SideBar} />
        <Route exact path="/" render={(props) => (<NoteList notes={this.state} />)} />
        <Route exact path="/notes/:id" render={(props) => {
          let newNote = []
          newNote = this.state.notes.filter(e => {
            console.log("element", e, "id", e.id, "params", props.match.params.id)
            console.log(newNote)
            if (e.id == props.match.params.id) {
              return e
            }
          })
          return <Note note={newNote[0]} delete={this.delete} />
        }} />
        <Route exact path="/create" render={(props) => (<CreateNote onSubmit={this.handleSubmit} onChange={this.onChange} name={this.state.name} title={this.state.title} />)} />
      </div>
    );
  }
}

export default App;