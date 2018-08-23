import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import DeleteModal from './components/DeleteModal';
import EditNote from './components/EditNote';
import { connect } from 'react-redux';
import { getNotes } from './actions';
import AuthContainer from './components/auth/AuthContainer';

const StyledApp = styled.div`
  display: flex;
  flex-flow: row;
  min-height: 100vh;
  height: 100%;
  `;

class App extends Component { 

  componentDidMount(){
    this.props.getNotes();
  }

  componentDidUpdate(){
    if(this.props.added || this.props.deleted || this.props.updated){
      this.props.getNotes();
    }
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
        <Route exact path='/' component={AuthContainer} />
        <Route path='/notes' component={NavBar} />
        <Route exact path='/notes' component={NotesContainer} />
        <Route exact path='/notes/:id' render={props => <Note {...props} />} />
        <Route path='/notes/create' render={props => <NoteForm {...props} />} />
        <Route exact path='/notes/:id/delete' render={props => <DeleteModal {...props} /> } />
        <Route path='/notes/edit/:id' render={props => <EditNote {...props} /> } />
      </StyledApp>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    added: state.added,
    deleted: state.deleted,
    updated: state.updated,
  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(App));
