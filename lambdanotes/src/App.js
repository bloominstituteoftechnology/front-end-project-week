import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Listview from './Component/Layout/Listview';
import Editview from './Component/Layout/Editview';
import Createview from './Component/Layout/Createview';
import Noteview from './Component/Layout/Noteview';

import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "AIzaSyC9GArQo09ELDhdx5ChO-FF2ENA0Xnx8ak",
    authDomain: "dromo-733c8.firebaseapp.com",
    databaseURL: "https://dromo-733c8.firebaseio.com",
    projectId: "dromo-733c8",
    storageBucket: "dromo-733c8.appspot.com",
    messagingSenderId: "195416214925"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody:''
    };
  }
  componentDidMount = () => {
    base.syncState('notes', {
      context: this,
      state: 'notes',
      asArray: true
    })
  }

  handleTaskChange = event => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  } 

  handleRequest = () =>{ 
    console.log('fire')
    let newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
      id: this.state.notes.length
    }

    let newNoteArray = [...this.state.notes]
    newNoteArray.push(newNote)
    this.setState({
      notes: newNoteArray,
      title: '',
      textBody: ''
    })
    }

  handleDelete = (id) => {
    var newList = this.state.notes;
    newList = newList.filter(item => (item.id.toString() !==  id.toString()) )
    console.log('newlist', newList);
    this.setState({
      notes: newList
    });
  }

  handleEdit = (id) => {
    let note = this.state.notes.filter(item => (item.id.toString() ===  id) )
    console.log("not",note)
    this.setState({
      title: note[0].title,
      textBody: note[0].textBody,
      id: note[0].id
    })
  }

  
  handleUpdate = (id) =>{ 
    let newNotes = [...this.state.notes];
      newNotes[id].title = this.state.title;
      newNotes[id].textBody = this.state.textBody;
    console.log('nn2',newNotes)
    this.setState({
      notes: newNotes,
      title: '',
      textBody: ''
    });
      
  }
  


  render() {
    return (
      <div className="container-fluid">
           <Route exact path="/" render={ (props) =>  <Listview {...props} notes={this.state.notes}  /> } />
          <Route path="/edit/:id" render={ (props) =>  (<Editview {...props} id={props.match.params.id} handleUpdate={this.handleUpdate} handleRequest = {this.handleRequest}   handleTaskChange= {this.handleTaskChange} handleEdit={this.handleEdit} title={this.state.title} textBody={this.state.textBody} />  )  } />
          <Route path="/note/:id" render={ (props) =>  (<Noteview {...props} handleDelete={this.handleDelete}    note={this.state.notes.filter(item => (item.id.toString() ===  props.match.params.id) )} />  )  } />
          <Route path="/create" render={ (props) =>  <Createview {...props} title={this.state.title} textBody={this.state.textBody} handleRequest = {this.handleRequest}  handleTaskChange= {this.handleTaskChange}/> } />    
      </div>
    );
  }
}

export default App;
