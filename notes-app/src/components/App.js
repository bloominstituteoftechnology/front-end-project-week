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
      console.log(response)
      this.setState({
        notes: [ ...this.state.notes, { ...obj, id:response.data.success}]
      })
    })
    .catch(err => console.log(err))
    console.log(this.state.notes)
  }

  startUpdate(obj){
    this.setState({
      editNote: obj
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
          />
        )}
          
        />

        <Route path='/card/:_id' render={props => ( 
          <Note
          {...props}
          startUpdate={this.startUpdate}
          />
        )}
          
        />
          
        </div>
      </div>
    );
  }
}

export default App;
