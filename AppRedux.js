import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

import {AllNotes, NewNote, NoteDetails, EditNote, DeleteNote} from './components';

import {getNotes} from './actions';



class App extends Component {
  constructor(){
    super();
    this.state = {
      hideDetails: true,
      notes: [
         {
          id: 0,
          title: "Clip",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 1,
          title: "Clop",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          title: "Bingo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 3,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 4,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 5,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 6,
          title: "Bongo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }

  componentDidMount = ()=> {
    console.log(this.props)
    this.props.getNotes();
    this.setState({
      notes: this.props.state.notes
    })
  }

  getNoteDetails = (id) => {
    console.log(id)
    console.log(this.props.state.notes)
    console.log(this.props.state.notes.find(note => {return note._id == id}))
    return (this.props.state.notes.find(note => {return note._id == id}))
    // return (this.props.state.notes.find(note => {return note._id === parseInt(id, 10)}))
    // 10 declares the number base
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
    let newArr = this.state.notes.slice().filter(note => note.id !== id);
    this.setState({
      notes: newArr,
      deleteEnabled: false,
    })
  }

  newNote = (newNote) => {
    // console.log('editnote', newNote);
    let newArr = this.state.notes.slice();
    newArr.push(newNote)
    this.setState({
      notes: newArr,
      count: this.state.count + 1,
    })
  }

  editNote = (noteEdit) => {
    let newArr = this.state.notes.slice()
    let position = newArr.findIndex(note => note.id === noteEdit.id)
    newArr[position] = noteEdit;
    this.setState({
      notes: newArr,
      count: this.state.count + 1,
    })
  }

  render() {
    // console.log(note.match.params.noteId);
    return (
        <AppDiv>

          <div className="left-menu">
            <h1>Lambda Notes</h1>
            <Link className="menu-item" to="/listnotes">View Your Notes</Link>
            <Link className="menu-item" to="/new-note">+ Create New Note</Link>
          </div>

          <div className="right-display">

            <Route exact path="/listnotes/"  render={ () => {
                return (<AllNotes notes={this.props.state.notes} />)
              }}></Route>

            <Route exact path="/new-note"  render={ () => {
                return (<NewNote count={this.state.count} newNote={this.newNote} notes={this.state.notes} />)
              }}></Route>

            <Route path="/listnotes/:noteId"
              exact={!this.state.deleteEnabled}
              render={ (note) => {
                let single = this.getNoteDetails(note.match.params.noteId);
                console.log(note.match.params.noteId)
                console.log(single, "single")
                    return (<NoteDetails enableDelete={this.enableDelete}  note={single} />)
                  }}></Route>

            <Route exact path="/listnotes/:noteId/edit" render={ (note) => {
                let single = this.getNoteDetails(note.match.params.noteId);
                return (<EditNote count={this.state.count} editNote={this.editNote} note={single} />)
              }}></Route>

          </div>

          {(this.state.deleteEnabled) ?
             (<div className="delete">
                <Route  path="/listnotes/:noteId/delete" render={ (note) => {
                    let single = this.getNoteDetails(note.match.params.noteId);
                    return (<div>
                        <DeleteNote deleteNote={this.deleteNote} disableDelete={this.disableDelete} note={single} />
                        {/* <NoteDetails note={single} /> */}
                      </div>)
                  }}></Route>
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
  getNotes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
