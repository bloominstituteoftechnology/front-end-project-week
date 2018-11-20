import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, NotesWrapper, Note, Title, TextBody } from '../StyledComponents/Notes';

class Notes extends Component {
  render() {
    return <Container>
        <h1>Your Notes:</h1>
        <NotesWrapper>
          {this.props.notes.map((note) => <Note key={Math.random()}>
              <Link className="cards" to={{ pathname: `viewnote/${note.id}`, state: note }}>
                {/* passing state down with the link to the route on App.js */}
                <Title>{note.title}</Title>
                <TextBody>{note.textBody}</TextBody>
              </Link>
            </Note>)}
        </NotesWrapper>
      </Container>;
  }
}

export default Notes;
