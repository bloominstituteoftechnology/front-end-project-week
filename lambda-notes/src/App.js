import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import  './App.css'




import {
  AllNotes,
  EditNote,
  DeleteNote,
  NewNote,
  NoteDetails,
  LeftMenu, } from './components';

import {
  addNote,
  deleteNote,
  editNote,
  getNotes,
  } from './actions';

class App extends Component {
  constructor(){
    super();
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      hideDetails: true,
    }
  }

  componentDidMount = () => {
    this.props.getNotes();

  }

  getNoteDetails = (id) => {
    return this.props.state.notes.find(note => {return note._id === id})
  }

  disableDelete = () => {
    this.setState({
      deleteEnabled: false,
    })
  }

  enableDelete = () => {
    this.setState({
      deleteEnabled: true,
    })
  }

  deleteNote = (id) => {
    this.props.deleteNote(id);
  }

  newNote = (newNote) => {
    this.props.addNote(newNote);
  }

  editNote = (noteEdit) => {
    this.props.editNote(noteEdit)
  }

  handleDrop(id){
    console.log('handleDrop, id: ', id);
    //will delete from actions when uncommented
    // this.props.deleteNote(id)
  }

 

  render() {
    return (
        <div className="app">
          <Redirect from="" to="/listnotes/" />
          <LeftMenu />

          <div className="right-display">
            <Route
              exact
              path="/listnotes/"
              render={ () => {
                return (
                  <AllNotes
                    onDrop={this.handleDrop} notes={this.props.state.notes} 
                    />
                )
              }}
            ></Route>

            <Route
              exact
              path="/new-note"
              render={ () => {
                return (
                  <NewNote
                    count={this.state.count} newNote={this.newNote} notes={this.state.notes} />
                )
              }}
            ></Route>

            <Route
              exact={!this.state.deleteEnabled}
              path="/listnotes/:noteId"
              render={ (note) => {
                return (
                  <NoteDetails
                    enableDelete={this.enableDelete}  note={this.getNoteDetails(note.match.params.noteId)} />
                )
              }}></Route>

            <Route
              exact
              path="/listnotes/:noteId/edit"
              render={ (note) => {
                return (
                  <EditNote
                    count={this.state.count}
                    editNote={this.editNote} note={this.getNoteDetails(note.match.params.noteId)} />
                )
              }}
            ></Route>

          </div>

          {(this.state.deleteEnabled) ?
             (<div className="delete">
                <Route
                  path="/listnotes/:noteId/delete"
                  render={ (note) => {
                    return (
                      <div>
                        <DeleteNote
                          deleteNote={this.deleteNote} disableDelete={this.disableDelete} note={this.getNoteDetails(note.match.params.noteId)} />
                      </div>
                    )
                  }}
                ></Route>
              </div>) :
          null}

        </div>
    );//return
  }//render
}

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {
  getNotes,
  addNote,
  deleteNote,
  editNote,
 
}

 export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));


