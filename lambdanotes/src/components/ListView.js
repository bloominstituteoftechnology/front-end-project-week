import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NoteView from './NoteView';

import './ComponentStyle.css';

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        tags: ['tag', 'nextTag'],
        title: '',
        textBody: ''
      }
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.notes.map(note => (
          <Link to={`/noteview/${note.id}`}>
            <NoteView key={note.id} note={note} />
          </Link>
        ))}
      </div>
    );
  }
}
