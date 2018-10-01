import React, { Component } from 'react'
import axios from 'axios';


export default class NotesList extends Component {
    state = {
        notes: [],
        newNote: {
            "tags": ["tag", "otherTag"],
            "title": "Note Title",
            "textBody": "Note Body",
        }
    }

    componentDidMount() {
        axios.get(`https://killer-notes.herokuapp.com/note/get/all`)
        .then(response => {
            this.setState({notes: response.data});
        })
        .catch(err => {
            console.log("error", err);
        });
    }
  render() {
    return (
        {state.notes.map(note => 
        <div key={note.id}>
          <h3 onClick={() => props.history.push(`/notes/${note.id}/`)}>
            {note.title}
          </h3>
          <p>{note.textBody}</p>
        </div>
    )
  }
}
