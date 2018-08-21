import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import {
    AllNotes,
    EditNote,
    DeleteNote,
    NewNote,
    NoteDetails,  } from './components';

import {
  addNote,
  deleteNote,
  editNote,
  getNotes, } from './actions';

const AppDiv = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: row;
    z-index: 0;
    height: 100vh;
    .left-menu {
      border: 1px solid lightgray;
      background-color: #D7D7D7;
      height: 100%;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1{
        ${'' /* border: 1px solid green; */}
        padding: 10px;
        width: 80%;

      }
      .menu-item{
        ${'' /* border: 1px solid red; */}
        width: 70%;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        color: white;
        background-color: #2AC0C4;
        font-weight: bold;
        margin: 10px;
        border: 1px solid gray;
      }
    }
    .right-display{
      ${'' /* border: 1px solid blue; */}
      background-color: #F3F3F3;
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
    .delete {
      ${'' /* border: 1px solid red; */}
      width: 100vw;
      height: 100vh;
      background-color:rgba(215,215,215,0.5);
      position: fixed;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      hideDetails: true,
      notes: [
        {
        id: 0,
        title: "Note Title 0",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        id: 1,
        title: "Note Title 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        id: 2,
        title: "Note Title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        id: 3,
        title: "Note Title 3",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
      ],
    }
  }

  componentDidMount = ()=> {
    this.props.getNotes();
    this.setState({
      notes: this.props.state.notes
    })
  }

  getNoteDetails = (id) => {
    return this.props.state.notes.find(note => {return note._id == id})
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

  render() {
    return (
        <AppDiv>

          <div className="left-menu">
            <h1>Lambda Notes</h1>
            <Link className="menu-item" to="/all-notes">View Your Notes</Link>
            <Link className="menu-item" to="/new-note">+ Create New Note</Link>
          </div>

          <div className="right-display">

            <Route
              exact
              path="/all-notes/"
              render={ () => {
                return (
                  <AllNotes notes={this.props.state.notes} />
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
              path="/all-notes/:noteId"
              render={ (note) => {
                return (
                  <NoteDetails
                    enableDelete={this.enableDelete}  note={this.getNoteDetails(note.match.params.noteId)} />
                )
              }}></Route>

            <Route
              exact
              path="/all-notes/:noteId/edit"
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
                  path="/all-notes/:noteId/delete"
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

        </AppDiv>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
