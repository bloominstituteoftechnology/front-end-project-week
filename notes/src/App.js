import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import SideBar from './components/Sidebar'
import NoteList from './components/NoteList.ex'
import Note from './components/Note'
import CreateNote from './components/CreateNote'
import { connect } from 'react-redux'
import SignIn from './components/SignIn'
import { fetchNotes, deleteNote, editNote, addNote, signIn } from './components/Actions/index'
import { withRouter } from 'react-router-dom';
import requireAuth from './components/auth/requireAuth'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      id: ''
    }
  }

  // componentWillMount = () => {
  //   console.log(appcwm)
  //   this.props.authenticated !== null ? null : this.props.fetchNotes(this.props.authenticated.user.uid)
  // }
  // }
  // componentWillReceiveProps = (newProps) => {
  //   this.props.fetchNotes(this.props.authenticated.user.uid)
  // }x
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = () => {
    let newNote = { title: this.state.title, text: this.state.text, id: this.props.notes.length + 1 }
    this.props.addNote(this.props.authenticated.user.uid, this.props.notes.length + 1, newNote)
    this.setState({
      title: '',
      text: '',
      id: ''
    })
  }
  delete = (id) => {
    this.props.deleteNote(this.props.authenticated.user.uid, id)
  }
  edit = (id) => {
    // Filter for the intended element
    // console.log("fire", id)
    let element = this.props.notes.filter(e => id === e.id)
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
    let newId = id
    let newNote = {
      title: this.state.title,
      text: this.state.text,
      id: newId,
      key: newId
    }
    this.props.editNote(this.props.authenticated.user.uid, newId, newNote)
    this.setState({
      title: '',
      text: '',
      id: ''
    })
  }

  render() {

    return (
      <div className="wrapper">
        <Route path="/" component={SideBar} />
        <Route exact path="/" render={(props) => <SignIn {...props} updateApp={this.updateState} />} />
        <Route exact path="/notes" component={requireAuth(NoteList)} />

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


        <Route exact path="/create" render={(props) => (this.props.authenticated.user ? <CreateNote pageTitle="Create New Note:" {...props} onSubmit={this.handleSubmit} onChange={this.onChange} text={this.state.text} title={this.state.title} /> : <Redirect to="/" />)} />
        <Route exact path="/edit/:id" render={(props) => (<CreateNote pageTitle="Edit Your Note:" {...props} onSubmit={this.handleEdit} onChange={this.onChange} text={this.state.text} title={this.state.title} />)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
    authenticated: state.auth
  }
}


export default withRouter(connect(mapStateToProps,
  { fetchNotes, deleteNote, editNote, addNote, signIn })(App));