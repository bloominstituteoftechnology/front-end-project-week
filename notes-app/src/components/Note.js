import React, { Component } from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';

class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: null
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.date }))
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    if(!this.state.note) {
      return <div>loading notes...</div>
    }
    
    const {note} = this.state;
      return (
        <NoteCard note={note} />
      )
  }
}

export default Note;