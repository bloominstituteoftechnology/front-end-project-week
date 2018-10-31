import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';


import LeftBar from './components/LeftBar';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import ExpandedNote from './components/ExpandedNote';
import EditNoteForm from './components/EditNoteForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      expandedNote: {}
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data.reverse() }))
      .catch(error => console.log(error));
  }

  addNote = note => {
    axios
        .post('https://fe-notes.herokuapp.com/note/create', note)
        .then(() => {
          this.state.notes.unshift(note);
          this.setState({ notes: this.state.notes });
        })
        .catch(error => console.log(error));
    this.props.history.push('/');
  }

  editNote = note => {
    axios 
        .put(`https://fe-notes.herokuapp.com/note/edit/${this.state.expandedNote.id}`, note)
        .then(() => {
          const targetIndex = this.state.notes.findIndex(note => note._id === this.state.expandedNote.id);
          this.state.notes.splice(targetIndex, 1, note);
          this.setState({ notes: this.state.notes });
        })
        .catch(error => console.log(error));
    this.props.history.push('/');
  }

  deleteNote = () => {
    axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.expandedNote.id}`)
        .then(() => {
          const targetIndex = this.state.notes.findIndex(note => note._id === this.state.expandedNote.id);
          this.state.notes.splice(targetIndex, 1);
          this.setState({ notes: this.state.notes });
        })
        .catch(error => console.log(error));
    this.props.history.push('/');
    

  }

  passThisNote = note => {
    this.setState({expandedNote: note});
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={LeftBar}/>
        <div className='content'>
          <Route render={props => (<NotesList {...props} passThisNote={this.passThisNote} notes={this.state.notes} />)} exact path='/'/>
          <Route render={props => (<AddNoteForm {...props} addNote={this.addNote} />)} exact path='/AddNoteForm'/>
          <Route render={props => (<ExpandedNote {...props} deleteNote={this.deleteNote} expandedNote={this.state.expandedNote} />)} exact path='/ExpandedNote/:id'/>
          <Route render={props => (<EditNoteForm {...props} editNote={this.editNote} expandedNote={this.state.expandedNote} />)} exact path='/EditNote/:id'/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
