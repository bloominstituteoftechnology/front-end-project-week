import React, { Component } from 'react';
import Note from './Note';
import axios from 'axios';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  render() {
    return (
      <div className="NotesList">
        <h1>Lambda Notes</h1>
        <div>
          {this.state.notes.map(note => {
            return (
              <Note 
                note={note}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

Note.defaultProps = {
  notes: []
}

export default Notes;