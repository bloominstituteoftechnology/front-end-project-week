import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Note from './Note';
import styled from 'styled-components';

const StyledNotesContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left: 240px;
background-color: #F2F1F2;

h2 {
    text-align: left;
    width: 1500px;
    padding-left: 15px;
    color: #4E5053;
}
`

const StyledNote = styled.div`
border: 2px solid #D9D9D9;
width: 250px;
height: 260px;
background-color: #FFFFFF;
margin: 10px;
`


class Notes extends Component {
  render() {
    return (
      <StyledNotesContainer>
        <h2>Your Notes:</h2>

          {this.props.notes.map(note => {
            return (
              <NavLink to={`/note/${note._id}`} key={note._id}>
                <StyledNote>
                    <Note
                      title={note.title}
                      textBody={note.textBody}
                    />
                </StyledNote>
              </NavLink>
            );
          })}
      </StyledNotesContainer>
    );
        }
      }

Note.defaultProps = {
 notes: [],
};

export default Notes;