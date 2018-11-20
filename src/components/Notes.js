import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, NotesWrapper, Note } from '../StyledComponents/Notes';

class Notes extends Component {
  render() {
    return <Container>
        <h1>Your Notes:</h1>
        <NotesWrapper>
          {this.props.notes.map((note) => <Note key={Math.random()}>
              <Link className="cards" to={{ pathname: `viewnote/${note.id}`, state: note }}>
                {/* passing state down with the link to the route on App.js */}
                <h3>{note.title}</h3>
                <div>{note.textBody}</div>
              </Link>
            </Note>)}
        </NotesWrapper>
      </Container>;
  }
}

export default Notes;
