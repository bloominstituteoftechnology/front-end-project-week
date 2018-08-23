import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import NoteForm from './components/NoteForm';
import ListView from './components/ListView';
import OneNote from './components/OneNote';
import CreateNoteView from './components/CreateNoteView';
import EditView from './components/EditView';
import Edit from './components/Edit';
import Delete from './components/DeleteView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from "axios";

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
componentDidMount() {
  const apiUrl = process.env.REACT_APP_API;
  axios
  .get('https://sgnotes.herokuapp.com/api/notes')
  .then(response => {
    console.log("Get Response",response);
    this.setState({notes: response.data });
  })
  .catch(err => {
    console.log(err);
  });
}
addNote = e => {//new
  e.preventDefault();
  // add code to create the smurf using the api
  const notes = this.state.notes.slice();
  const noteData = { notetitle: this.state.notetitle, notebod: this.state.notebod }
  // notes.push(note);
  axios
  .post('http://localhost:6500/api/notes',  noteData )
  .then(response => {
    notes.push(response.data)
    console.log("POST Response",response);
    this.setState({
      notetitle: '',
      notebod: '',
      notes,
      note: ''
      
    });
    // this.handleNoteData(response.data)
    // this.setState({
    
  // });
})
  .catch(error => console.log(error));
};
deleteNote = id => {//added new for backend
  // delete request to the server with the id.
  
  axios
  
  .delete(`${'http://localhost:6500/api/notes'}/${id}`)
  
    .then(response => {
      console.log(response);
      this.handleNoteData(response.data)
      this.componentDidMount()
      // this.setState({ note: '',
      // notetitle: '',
      // notebod: '',
      //  });
    })
    .catch(err => {
      console.log(err);
    });
};
editNote = id => {//new edit
  // const id = this.state.id
  const notes = this.state.notes.slice();
  const noteData = { notetitle: this.state.notetitle, notebod: this.state.notebod }
  // notes.push(note);
  console.log(noteData)
  axios
  .put(`${'http://localhost:6500/api/notes'}/${id}`,  noteData )
  .then(response => {
    this.componentDidMount()
    notes.push(response.data)
    console.log("PUT Response",response);
    this.setState({
      notetitle: '',
      notebod: '',
      notes,
      note: ''
      
    });
    // this.setState({ id: null, notes: {id:null, notetitle:'', notebod:''} });
    //     this.props.handleRefresh();
})
  .catch(error => console.log(error));
};
handleNoteData = data => {
  this.setState({ note: data });
};
//commented out trying to connect backend
// addNote = e => { 
//     e.preventDefault();
//     const notes = this.state.notes.slice();
//     notes.push({ notetitle: this.state.notetitle, notebod: this.state.notebod,  id: Date.now() });
//     this.setState({ notes, note: '' });
//   };

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
        <Route  path="/note/:id" render={props=><OneNote notes={this.state.notes} note={this.state.note} notetitle={this.state.notetitle} notebod={this.state.notebod}
        handleNoteChange={this.changeNote} deleteNote={this.deleteNote} id={this.state.id} {...props}/>}/>
        {/* ß */}
        {/* <Route path="/edit/:id" render={props=><EditView notes={this.state.notes} note={this.state.note} notetitle={this.state.notetitle} notebod={this.state.notebod}
         id={this.state.id}
        handleNoteChange={this.changeNote} editNote={this.editNote}  {...props}/>}/> */}
        <Route path="/edit/:id" render={props=><Edit notes={this.state.notes} note={this.state.note} notetitle={this.state.notetitle} notebod={this.state.notebod}
         id={this.state.id}
        handleNoteChange={this.changeNote} editNote={this.editNote}  {...props}/>}/>
        {/* made 2nd one for connecting to backend nad passing down props */}
        <Route path='/delete' component={Delete}/>
      </Appcont>
    );
  }
}

export default App;
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
