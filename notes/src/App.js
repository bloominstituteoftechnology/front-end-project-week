import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import {AllNotes, NewNote, NoteDetails, EditNote} from './components';

const AppDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  .left-menu {
    border: 1px solid green;
    width: 30%;
    display: flex;
    flex-direction: column;
  }
  .right-display{
    border: 1px solid blue;
    width: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [
        {
        id: 0,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        id: 1,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        id: 2,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        id: 3,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
      ],
    }
  }

  newNote = (newNote) => {
    let newArr = this.state.notes.slice();
    newArr.push(newNote)
    this.setState({
      notes: newArr
    })
  }

  getNoteDetails = (id) => {
    return (this.state.notes.find(note => {return note.id === parseInt(id, 10)}))
    // 10 declares the number base
  }

  render() {
    return (
      <AppDiv>
        <div className="left-menu">
          <h1>Lambda Notes</h1>
          <Link to="/all-notes">View Your Notes</Link>
          <Link to="/new-note">+ Create New Note</Link>
        </div>

        <div className="right-display">

          <Route  exact path="/all-notes"  render={ () => {
              return (<AllNotes notes={this.state.notes} />)
            }}></Route>

          <Route  exact path="/new-note"  render={ () => {
              return (<NewNote newNote={this.newNote} notes={this.state.notes} />)
            }}></Route>
          <Route exact path="/all-notes/:noteId"  render={ (note) => {
              let single = this.getNoteDetails(note.match.params.noteId);
              return (<NoteDetails note={single} />)
            }}></Route>
          <Route exact path="/all-notes/:noteId/edit"  render={ (note) => {
              let single = this.getNoteDetails(note.match.params.noteId);
              return (<EditNote note={single} />)
            }}></Route>

        </div>
      </AppDiv>
    );//return
  }//render
}

export default App;
