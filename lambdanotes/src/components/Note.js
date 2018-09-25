import React, { Component } from 'react';
import axios from 'axios';
// import NoteCard from './NoteCard';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
    .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(res => {
      this.setState(() => ({ note: res.data }));
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    if (!this.state.note) {
      return <div>Loading note...</div>;
    }
    return(
      <div className='one-note'>
        <div className='note-action'>
          <span>edit</span>
          <span>delete</span>
        </div>
        {/* <NoteCard /> */}
        <h3>{this.state.note.title}</h3>
        <p>{this.state.note.textBody}</p>
      </div>
    );
    
  }
}