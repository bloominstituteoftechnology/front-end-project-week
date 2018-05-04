import React, { Fragment } from 'react';
import axios from 'axios';

class NotesList extends React.Component {
  state = {
    notes: []
  };
  render() {
    return (
      <Fragment>
        <h2>Your Notes:</h2>
        <ul>
          {this.state.notes.map(note => {
            return <li key={note._id}>{note.username}</li>
          })}
        </ul>
      </Fragment>
    );
  }
  // Why does /notes render to screen, rather than signin?
  componentDidMount() {
      const token = localStorage.getItem('authtoken');
      const requestOptions = {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }
    axios
      .get('https://wsw-backendproject.herokuapp.com/api/notes', requestOptions)
      .then(({ data }) => {
        this.setState({ notes: data });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default NotesList;