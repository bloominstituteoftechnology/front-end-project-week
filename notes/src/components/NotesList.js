import React from 'react';
import axios from 'axios';


import NoteCard from './NoteCard';



export default class NotesList extends React.Component{
  constructor(props) {
    super (props);
    this.state = {
      notes: [],
      active: null
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
  
  active = id => this.setState({ active: id })

  render(){
    return (
      <div>
      <h2>Your Notes:</h2>
      {this.state.notes.map( note => (
        <NoteCard key={note._id} note={note} />
      ))}
      </div>
    )
  }
}