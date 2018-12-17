import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Note from './Note';
import styled from 'styled-components';

const StyledNotesContainer = styled.div`
display: flex;
// flex-direction: row;
justify-content: center;
margin-left: 241px;
background-color: #F2F1F2;

h2 {
    width: 200px;
    padding-left: 15px;
    color: #4E5053;
}
`


class Notes extends Component {
  render() {
    return (
      <StyledNotesContainer>
        <h2>Your Notes:</h2>
        <ul>
          {this.props.notes.map(note => {
            return (
              <NavLink to={`/note/${note._id}`} key={note._id}>
                <Note
                  title={note.title}
                  textBody={note.textBody}
                />
              </NavLink>
            );
          })}
        </ul>
      </StyledNotesContainer>
    );
        }
      }

Note.defaultProps = {
 notes: [],
};

export default Notes;