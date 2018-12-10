import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import NoteList from './NoteList/NoteList';
import Nav from './nav';
import CreateNoteForm from './CreateNote/CreateNoteForm';
import Note from './NoteList/Note';

class App extends Component {
  constructor(){
    super();
    this.state={
      notes: [],
      editNote: {}
    }
  }

  componentDidMount(){
    this.getNotes();
  }
  getNotes = () =>{
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        
        this.setState({ 
          notes: response.data 
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addToList = (obj) => {
    
    console.log(this.state.notes)
    axios.post('https://fe-notes.herokuapp.com/note/create', obj)
    .then(response => {
      
      this.setState({
        notes: [ ...this.state.notes, { ...obj, id:response.data.success}]
      })
    })
    .catch(err => console.log(err))
    console.log(this.state.notes)
  }

  updateToList = (id, obj) => {
    console.log(id)
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, obj)
      .then(response => {
        console.log(response)
        console.log(this.state.notes)
         this.setState({
          notes:  this.state.notes.map(note => {
            if(note._id === id){
              return response.data;
            }else{
              return note;
            }
          })
         });
      })
      .catch(err => {
        console.log(err);
      })
      console.log(this.state.notes)
  }

  deleteNote = (id) => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response)
        this.getNotes();
      })
      .catch(err => {
        console.log(err);
      })

  }

  startUpdate =(obj) =>{
    this.setState({
      editNote: obj
    })
  }
  resetEdit = () => {
    this.setState({
      editNote: {}
    })
  }


  render() {
    
    return (
      <div className="clearfix App">
        <Nav />
        <div className="view">
        <Route exact path='/' render={props => (
          <NoteList 
            {...props}
            notes={this.state.notes}
          />
        )}
          
        />

        <Route path='/form' render={props => ( 
          <CreateNoteForm 
            {...props}
            addToList={this.addToList}
            updateToList={this.updateToList}
            resetEdit={this.resetEdit}
            editNote={this.state.editNote}
          />
        )}
          
        />

        <Route path='/card/:_id' render={props => ( 
          <Note
          {...props}
          startUpdate={this.startUpdate}
          deleteNote={this.deleteNote}
          />
        )}
          
        />
          
        </div>
      </div>
    );
  }
}

export default App;
