import React, { Component } from 'react';
import { Link } from "react-router-dom";
import dummyData from '../dummy-data';
import Note from './Note';

class NotesList extends Component {
    constructor() {
      super();
      this.state = {
        data: []
      }
    }

    componentDidMount() {
      this.setState({ data: dummyData})
    }

    render() {
      return (
        <div className="notes-list">
          <h2>Your Notes:</h2>
          {this.state.data.map(note => (
            <Link to={`/notes/${note.id}`} key={note.id}>
            <Note note={note}/>
            </Link>
          ))}
        </div>
      );
    }

}

export default NotesList;