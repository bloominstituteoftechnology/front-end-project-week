import React, { Component } from 'react';
import { CardColumns} from 'reactstrap';
import { Link } from 'react-router-dom';

import NotesFunc from './NotesFunc';


class Notes extends Component {
  render() {
    return (
      <CardColumns>
        <NotesFunc />
        <NotesFunc />
        <NotesFunc />
        <NotesFunc />
        <NotesFunc />
        <NotesFunc />
        <NotesFunc />
        <NotesFunc />
        <NotesFunc />
      </CardColumns>
    );
  }
}

export default Notes;

// Create a Constructor Function for this document to make it easier to repeat.