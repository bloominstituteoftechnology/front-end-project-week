import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
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
display: flex;
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
    note: "",
    notetitle: '',
    notebod: ""

}
}
addNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ notetitle: this.state.notetitle, notebod: this.state.notebod,  id: Date.now() });
    this.setState({ notes, note: '' });
  };

  changeNote = e => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    return (
      <Appcont className="App">
<SideBar />
       <Route exact path="/" render={props=><ListView notes={this.state.notes} {...props}/>}/>
        {/* <Route exact path='/' render={props => 
          <ListView notes={this.state.notes} {...props}/>}/> */}
          {/* <Route exact path='/' component={ListView}/> */}
        {/* <Route exact path='/createnote' component={CreateNoteView}/> */}
        <Route exact path="/createnote" render={props=><CreateNoteView 
        notetitle={this.state.notetitle} notebod={this.state.notebod}
        handleNoteChange={this.changeNote} handleAddNote={this.addNote} {...props}/>}/>
        {/* <Route path='/note' component={OneNote}/> */}
        <Route  path="/note/:id" render={props=><OneNote notes={this.state.notes} {...props}/>}/>
        <Route path='/edit' component={EditView}/>
        <Route path='/delete' component={Delete}/>
      </Appcont>
    );
  }
}

export default App;
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
