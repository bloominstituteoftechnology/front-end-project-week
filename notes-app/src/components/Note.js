import React, { Component } from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';

class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: null,
    }
  }

/*   componentDidMount(){
    const id = this.state.match.params.id;
    this.fetchNote(id);
  }
   */

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ notes: response.data }))
      })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    if(!this.state.note) {
      return <div>loading notes...</div>
    }
      return (
        <NoteCard note={this.state} />
      )
  }
}

export default Note;