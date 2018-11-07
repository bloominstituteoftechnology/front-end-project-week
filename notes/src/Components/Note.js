import React, { Component } from 'react';
import axios from 'axios';

import NoteCard from './NoteCard';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {

    const { note } = this.state;

    return <NoteCard note={note}/>;

  }
}
export default Note;