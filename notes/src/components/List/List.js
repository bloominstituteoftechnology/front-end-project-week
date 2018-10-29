import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';

export default class List extends Component {
  state = {
    notes: [],
  };
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then((res) => {
        this.setState(() => ({ notes: res.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
  }
  render() {
    return (
      <div>
        {this.state.notes.map((note) => (
          <Link to={`/notes/${note._id}`} key={note._id}>
            <NoteCard note={note} />
          </Link>
        ))}
      </div>
    );
  }
}
