import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import DeleteModal from './components/DeleteModal';
import EditNote from './components/EditNote';
import { connect } from 'react-redux';
import { getNotes } from './actions';

const StyledApp = styled.div`
  display: flex;
  flex-flow: row;
  height: 100vh;
  `;

class App extends Component { 

  componentDidMount(){
    this.props.getNotes(this.props.URL);
  }

  addNote = (title, body) => {
    let newNotes = this.state.notes.slice();
    newNotes.push({tags: [], title: title, textBody: body, id: this.state.id});
    this.setState({notes: newNotes, id: this.state.id + 1});
  }

  deleteNote = (id) => {
    let newNotes = this.state.notes.slice().filter(note => note.id !== Number(id));
    this.setState({notes: newNotes});
  }

  editNote = (id, title, body) => {
    let newNotes = this.state.notes.slice().map(note => {
      if(note.id === Number(id)){
        return {
          tags: [],
          title: (title || note.title),
          textBody: (body || note.textBody),
          id: note.id,
        }
      }
      return note;
    })
    this.setState({notes: newNotes});
  }

  render() {
    return (
      <StyledApp>
        <Route path='/' component={NavBar} />
        <Route exact path='/' render={props => <NotesContainer {...props} />} />
        <Route path='/notes/:id' render={props => <Note {...props} />} />
        <Route path='/create' render={props => <NoteForm {...props} />} />
        <Route exact path='/notes/:id/delete' render={props => <DeleteModal {...props} /> } />
        <Route path='/edit/:id' render={props => <EditNote {...props} /> } />
      </StyledApp>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    URL: state.URL,
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error
  }
}

export default connect(mapStateToProps, { getNotes })(App);
