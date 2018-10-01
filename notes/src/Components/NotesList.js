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
      <div>
      {this.state.notes.map(note => <div key={note.id}>{note.title}</div>)}
      </div>
    )
  }
}
