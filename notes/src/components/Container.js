import React from 'react';
import axios from 'axios';
import {Route } from 'react-router-dom';


import ButtonContainer from './ButtonContainer/ButtonContainer';
import NotesList from './Notes/NotesList';
import Note from './Notes/Note';
import CreateNote from './Notes/CreateNote';

export default class NotesContainer extends React.Component{
  constructor() {
    super ();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then( response => {
        this.setState({ notes: response.data });
      })
      .catch( error => {
        console.error( error );
      })
  }

  render(){
    return (
      <div>
        <ButtonContainer />
        <Route exact path='/' render={ props => (
          <NotesList  {...props} notes={this.state.notes}/>
        )}
        />
        <Route path='/note/create' component={CreateNote} />
        <Route path='/get/:id' conponent={Note} />
      </div>
      
    )
  }
  
}

