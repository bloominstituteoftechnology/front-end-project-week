import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import axios from 'axios';

import {
  AllNotes,
  EditNote,
  DeleteNote,
  NewNote,
  NoteDetails,
  LeftMenu,
  Welcome, 
} from './components';

import {
  // addNote,
  // deleteNote,
  // editNote,
  getNotes,
  sortNote,
  clearNotes,
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
    if(localStorage.getItem('JWT')){
      this.props.history.push('/all-notes')
    } else {
      this.props.history.push('/welcome/')
    }
  }

  getNoteDetails = (id) => {
    return this.props.state.notes.find(note => {return note.id === +id})
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
      // this.props.addNote(newNote);
      if(localStorage.getItem('JWT')){
        const token = localStorage.getItem('JWT')
        const authHeader = {
          headers: {
            Authorization: token,    
          } 
        }
      axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/notes/', (newNote), authHeader)
      // axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/notes/', (newNote), authHeader)
      .then(res => {
        this.props.history.push('/all-notes')
        this.props.getNotes();
      }).catch(err => console.log(err.message))
    } else {
      console.log('need to include toekn in request')
    }
  }

  editNote = (noteEdit) => {
    // this.props.editNote(noteEdit)//this is the redux one: 
    if(localStorage.getItem('JWT')){
      const token = localStorage.getItem('JWT')
      const authHeader = {
        headers: {
          Authorization: token,    
        } 
      }
      axios.put(`https://lambda-notes-backend-mjk.herokuapp.com/api/notes/${noteEdit.id}`, (noteEdit), authHeader)
      // axios.put(`https://lambda-notes-backend-mjk.herokuapp.com/api/notes/${noteEdit.id}`, (noteEdit), authHeader)
      .then(res => {
        this.props.getNotes();
        this.props.history.push('/all-notes')
      }).catch(err => console.log(err.message))
    }else {
      console.log('need to include toekn in request')
    }
  }

  handleDrop(id){
    // console.log('handleDrop, id: ', id);
    //will delete from actions when uncommented
    // this.props.deleteNote(id)
    if(localStorage.getItem('JWT')){
      const token = localStorage.getItem('JWT')
      const authHeader = {
        headers: {
          Authorization: token,    
        } 
      }
      axios.delete(`https://lambda-notes-backend-mjk.herokuapp.com/api/notes/${id}`, authHeader)
      // axios.delete(`https://lambda-notes-backend-mjk.herokuapp.com/api/notes/${id}`, authHeader)
      .then(res => {
        this.props.history.push('/all-notes')
        this.props.getNotes();
      }).catch(err => console.log(err.message))
    } else {
     console.log('need to include a valid token in request')
    }
  }

  sortById = (e) => {
    let newArr = this.props.state.notes.slice()
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
    this.props.sortNote(newArr)
  }

  sortByLetter = (e) => {
    let newArr = this.props.state.notes.slice()
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
    this.props.sortNote(newArr)
  }

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('JWT');
    localStorage.removeItem('username');
    this.props.clearNotes();
    this.props.history.push('/welcome')
  }

  render() {
    return (
      <AppDiv>
        {localStorage.getItem('JWT') ? <LeftMenu logout={this.logout} /> : null}

        <div className="right-display">
         {localStorage.getItem('JWT') ?
            <React.Fragment>
                <Route
                    exact
                    path="/all-notes"
                    render={ () => {
                      return (
                        <AllNotes
                          sortByLetter={this.sortByLetter}
                          sortById={this.sortById}
                          onDrop={this.handleDrop} 
                          notes={this.props.state.notes}
                          username={this.props.state.username}
                          getNotes={this.props.getNotes} />
                      )
                    }}
                  ></Route>

                  <Route
                    exact
                    path="/new-note"
                    render={ () => {
                      return (
                        <NewNote
                          count={this.state.count} username={this.props.state.username} newNote={this.newNote} notes={this.state.notes} />
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

                  {(this.state.deleteEnabled) ?
                      (<div className="delete">
                          <Route
                            path="/all-notes/:noteId/delete"
                            render={ (note) => {
                              return (
                                <div>
                                  <DeleteNote
                                    deleteNote={this.deleteNote} disableDelete={this.disableDelete} note={this.getNoteDetails(note.match.params.noteId)} />
                                </div>)}}
                          ></Route>
                      </div>) :
                  null}
              </React.Fragment> :
          
           <Route path="/welcome" component={Welcome}></Route>}
        
        </div>
      </AppDiv>
    );//return
  }//render
}

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {
  getNotes,
  // addNote,
  // deleteNote,
  // editNote,
  sortNote,
  clearNotes,
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
