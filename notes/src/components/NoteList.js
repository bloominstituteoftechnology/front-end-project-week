import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom'
import NoteCard from './NoteCard';

class NoteList extends Component {
  constructor() {
    super()
      this.state = {
        notes: [
          {tags: [],
           title: 'this is the note title',
           textBody: 'this is the text body',
           id: 'abcdefg',
          },
           {tags: [],
           title: 'second note',
           textBody: 'when I walk I thinka bout a new way to walk',
           id: '123456g',
          }
        ]
      }
  }

  componentDidMount() {
    //axios stuff here

  }


  render() {
    return (
      <div className="App">
      {this.state.notes.map(note => (
            <div>
              <NoteDetails key={note.id} note={note} />
            </div>
            ))}

      </div>
    );
  }
}

  function NoteDetails({note}) {
    const { id } = note
      return(
          <Link to={`/note/${id}`}>
            <NoteCard note={note} />
          </Link>
          )

  }
export default NoteList;
