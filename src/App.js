import React, { Component } from 'react';
import { 
  Route,
  // Redirect 
  } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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
  sortNote,
  markdownNotes } from './actions';

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
    // var promise1 = new Promise(res =>  {
    //   res(this.props.getNotes())
    // })
    // promise1.then( () => {
    //   console.log(this.props.state.notes)
    // })
  }

  getNoteDetails = (id) => {
    return this.props.state.notes.find(note => {return note.id == id})
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
    this.props.deleteNote(id)
  }

  sortById = (e) => {
    // console.log(e)
    // console.log(this.props.state.notes)
    // console.log(this.props)
    // console.log('sortById')
    let newArr = this.props.state.notes.slice()
    // console.log(newArr)

    function compare(a, b){
      const Aa = a.id;
      const Bb = b.id;
      let comparison = 0;
      if (Aa > Bb) {
        comparison = 1;
      } else if (Aa < Bb) {
        comparison = -1;
      }
      return comparison;
    }

    newArr.sort(compare)

    // console.log(newArr)
    this.props.sortNote(newArr)
  }

  sortByLetter = (e) => {
    // console.log(e)
    // console.log(this.props.state.notes)
    // console.log(this.props)
    // console.log('sortByLetter')
    let newArr = this.props.state.notes.slice()
    // console.log(newArr)

    function compare(a, b){
      const titleA = a.title;
      const titleB = b.title;
      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    }
    newArr.sort(compare)
    // console.log(newArr)
    this.props.sortNote(newArr)
  }

  render() {
    return (
        <AppDiv>
          {/* <Redirect from="/" to="/all-notes" /> */}
          <LeftMenu />

          <div className="right-display">
            <Route
              exact
              path="/all-notes/"
              render={ () => {
                return (
                  <AllNotes
                    sortByLetter={this.sortByLetter}
                    sortById={this.sortById}
                    onDrop={this.handleDrop} notes={this.props.state.notes} />
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
                    enableDelete={this.enableDelete} note={this.getNoteDetails(note.match.params.noteId)} />
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
  sortNote,
  markdownNotes,
}
 export default DragDropContext(HTML5Backend)(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));

 const AppDiv = styled.div`
     ${'' /* border: 1px solid red; */}
     display: flex;
     flex-direction: row;
     z-index: 0;
     height: 100%;
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
