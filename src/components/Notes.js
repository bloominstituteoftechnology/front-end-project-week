import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, NotesWrapper, Note } from '../StyledComponents/Notes';

class Notes extends Component {
  render() {
    return (
      <Container>
        <h1>Your Notes:</h1>
        <NotesWrapper>
          {this.props.notes.map((note) => (
            <Link
              className="cards"
              to={{ pathname: `viewnote/${note.id}`, state: note }}
              key={Math.random()}
            >
              {/* passing state down with the link to the route on App.js */}
              <Note>
                <h3>{note.title}</h3>
                <div>{note.textBody}</div>
              </Note>
            </Link>
          ))}
        </NotesWrapper>
      </Container>
    );
  }
}

export default Notes;
