import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SideBar from './components/Sidebar'
import NoteList from './components/NoteList.ex'
import Note from './components/Note'
import CreateNote from './components/CreateNote'
import { connect } from 'react-redux'
import { fetchNotes } from './components/Actions/index'

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
    let newNotes = [...this.state.notes]
    newNotes.push({ title: this.state.title, text: this.state.text, id: this.state.notes.length })
    this.setState({
      notes: newNotes,
      title: '',
      text: '',
      id: ''
    })
  }
  delete = (id) => {
    let newNotes = this.state.notes.filter((e, i) => e.id !== id)
    this.setState({
      notes: newNotes,
    })
  }
  edit = (id) => {
    // Filter for the intended element
    console.log(id)
    let element = this.state.notes.filter(e => id === e.id)
    // Load text and title into state
    console.log(element)
    this.setState({
      title: element[0].title,
      text: element[0].text,
      id: element[0].id
    })
  }

  handleEdit = () => {
    let element = this.state.notes.filter(e => this.state.id !== e.id)
    element.unshift({ title: this.state.title, text: this.state.text, id: this.state.id })
    this.setState({
      notes: element,
      text: '',
      id: '',
      title: ''
    })
  }
  render() {
    // console.log("state", this.state)
    return (
      <div className="wrapper">
        <Route path="/" component={SideBar} />
        <Route exact path="/" render={(props) => (<NoteList notes={this.props.notes} />)} />

        {/* Render Note component with the note we are filtering for:  */}
        <Route exact path="/notes/:id" render={(props) => {
          let newNote = []
          newNote = this.state.notes.filter(e => {
            if (e.id.toString() === props.match.params.id) {
              return e
            }
          })
          return <Note note={newNote[0]} delete={this.delete} edit={this.edit} />
        }} />


        <Route exact path="/create" render={(props) => (<CreateNote pageTitle="Create New Note:" onSubmit={this.handleSubmit} onChange={this.onChange} text={this.state.text} title={this.state.title} />)} />
        <Route exact path="/edit" render={(props) => (<CreateNote pageTitle="Edit Your Note:" onSubmit={this.handleEdit} onChange={this.onChange} text={this.state.text} title={this.state.title} />)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}


export default connect(mapStateToProps,
  { fetchNotes })(App);