import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SideBar from './components/Sidebar'
import NoteList from './components/NoteList.ex'
import Note from './components/Note'
import CreateNote from './components/CreateNote'
import { connect } from 'react-redux'
import { fetchNotes, deleteNote, editNote, addNote } from './components/Actions/index'
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      text: ''
    }
  }

  componentDidMount = () => {
    this.props.fetchNotes()
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    let newNote = { title: this.state.title, text: this.state.text, id: this.state.notes.length, key: this.state.notes.length }
    this.props.addNote(newNote)
  }
  delete = (id) => {
    this.props.deleteNote(id)
  }
  edit = (id) => {
    // Filter for the intended element
    // console.log("fire", id)
    let element = this.state.notes.filter(e => id === e.id)
    // Load text and title into state
    console.log(element)
    this.setState({
      title: element[0].title,
      text: element[0].text,
      id: element[0].id
    })
  }

  handleEdit = (id) => {
    console.log("fire", id)
    let newNote = {
      title: this.state.title,
      text: this.state.text,
      id: id,
      key: id
    }
    this.props.editNote(id, newNote)
  }
  render() {

    return (
      <div className="wrapper">
        <Route path="/" component={SideBar} />
        <Route exact path="/" render={(props) => (<NoteList notes={this.props.notes} />)} />

        {/* Render Note component with the note we are filtering for:  */}
        <Route exact path="/notes/:id" render={(props) => {
          let newNote = []
          newNote = this.props.notes.filter(e => {
            if (e.id.toString() === props.match.params.id) {
              return e
            }
          })
          return <Note note={newNote[0]} delete={this.delete} edit={this.edit} />
        }} />


        <Route exact path="/create" render={(props) => (<CreateNote pageTitle="Create New Note:" onSubmit={this.handleSubmit} onChange={this.onChange} text={this.state.text} title={this.state.title} />)} />
        <Route exact path="/edit/:id" render={(props) => (<CreateNote pageTitle="Edit Your Note:" {...props} onSubmit={this.handleEdit} onChange={this.onChange} text={this.state.text} title={this.state.title} />)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}


export default withRouter(connect(mapStateToProps,
  { fetchNotes, deleteNote, editNote, addNote })(App));