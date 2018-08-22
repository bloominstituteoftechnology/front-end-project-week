import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import Note from './components/Note';
import AddNote from './components/AddNote';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      newTitle: '',
      newTextBody: '',
      deleting: false,
      currentNote: {}
    }
  }
  componentDidMount() {
  axios
    .get(`${process.env.REACT_APP_API}/api/notes`)
    .then(response => {
      this.setState({ notes: response.data })
    })
    .catch(err => {console.log(err)})
}
  handleInputChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }
  handleSetCurrent = note => {
    this.setState({ currentNote: note })
  }
  handleAddNote = event => {
    const newNote = ({ title: `${this.state.newTitle}`, content: `${this.state.newTextBody}` });
    axios
        .post(`${process.env.REACT_APP_API}/api/notes`, newNote)
        .then(response => {
            this.setState({ newTitle: '', newTextBody: '' })
        })
        .catch(err => {console.log(err)})
  }
  handleDeleteNote = id => {
        const id = this.state.id;
        axios
            .delete(`${process.env.REACT_APP_API}/api/notes/${id}`)
            .then(response => {
                this.props.history.push('/')
                this.setState({ id: null, deleting: !this.state.deleting })
            })
            .catch(err => {console.log(err)})
  }
  handleEditTitle = event => {
    this.setState({currentNote: {id: this.state.currentNote.id, title: event.target.value, textBody: this.state.currentNote.textBody}})
  }
  handleEditTextBody = event => {
    this.setState({currentNote: {id: this.state.currentNote.id, title: this.state.currentNote.title, textBody: event.target.value}})
  }
  handleEditNote = id => {
    const id = this.props.match.params.id;
    axios
    .put(`${process.env.REACT_APP_API}/api/notes/${id}`, { title: this.state.currentNote.title, content: this.state.currentNote.textBody })
    .then(response => {
        this.props.history.push('/')
        this.setState({ id: null, note: [] })
    })
    .catch(err => {console.log(err)})
  }
  render() {
    return (
      <div className='app'>
        <div className='navigation'>
          <Navigation />
        </div>
        <div className='content'>
          <Route exact path='/' render={props => <Notes {...props} notes={this.state.notes} />}/>
          <Route path='/note/:id' render={props => <Note {...props} notes={this.state.notes} />} />
          <Route path='/add' render={props =>
            <AddNote {...props} notes={this.state.notes} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} newTitle={this.state.newTitle} newTextBody={this.state.newTextBody}/>
          } />
        <Route path='/edit/:id' render={props => <EditNote {...props} notes={this.state.notes} currentNote={this.state.currentNote} handleSetCurrent={this.handleSetCurrent} handleEditNote={this.handleEditNote} handleEditTitle={this.handleEditTitle} handleEditTextBody={this.handleEditTextBody} />} />
        </div>
        <Route path='/note/:id/delete' render={props => (<DeleteNote {...props} toggleDeleting={this.toggleDeleting} handleSetCurrent={this.handleSetCurrent} handleDeleteNote={this.handleDeleteNote} currentNote={this.state.currentNote}/>)}/>
      </div>
    );
  }
}

export default App;
