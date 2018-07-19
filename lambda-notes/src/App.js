import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarExample from './components/SideBar';
import NoteForm from './components/NoteForm';
import ListView from './components/ListView';
import OneNote from './components/OneNote';
import CreateNoteView from './components/CreateNoteView';
import EditView from './components/EditView';
import Delete from './components/DeleteView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Appcont = styled.div`

    margin: 0 auto;
    width: 880px;
`;

// class App extends Component {
  class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [
                {
            notetitle: "Note Title",
            notebod:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" ,
            id: 123, 
        },
        {
          notetitle: "Note Title2",
          notebod:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" ,
          id: 1233, 
      },
    ],
    note: ''
}
}
addNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ notetitle: this.state.note, notebod: this.state.note,  id: Date.now() });
    this.setState({ notes, note: '' });
  };

  changeNote = e => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    return (
      <Appcont className="App">
       <Route exact path="/" render={props=><ListView notes={this.state.notes} {...props}/>}/>
        {/* <Route exact path='/' render={props => 
          <ListView notes={this.state.notes} {...props}/>}/> */}
          {/* <Route exact path='/' component={ListView}/> */}
        {/* <Route exact path='/createnote' component={CreateNoteView}/> */}
        <Route exact path="/createnote" render={props=><CreateNoteView 
        title={this.state.note.notetitle} body={this.state.note.notebod}
        handleNoteChange={this.changeNote} handleAddNote={this.addNote} {...props}/>}/>
        <Route path='/note' component={OneNote}/>
        <Route path='/edit' component={EditView}/>
        <Route path='/delete' component={Delete}/>
      </Appcont>
    );
  }
}

export default App;
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
