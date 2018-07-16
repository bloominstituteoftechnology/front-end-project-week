import React, { Component } from 'react';
import styled from 'styled-components';
import NoteCard from '../components/NoteCard';

const StyledNotesContainer = styled.div`
    padding: 5%;
    background: #F3F3F3;
    width: 100%;
`;

const StyledNotes = styled.div`
    display: flex;
    flex-flow: row wrap;

`;

class NotesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          notes: [{
              tags: [],
              title: "Learn Redux",
              textBody: "You should really learn Redux, Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text. Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.",
              id: 1,
          }, 
          {
            tags: [],
            title: "Learn Redux",
            textBody: "You should really learn Redux",
            id: 2,
          }, 
          {
            tags: [],
            title: "Learn Redux",
            textBody: "You should really learn Redux",
            id: 3,
          }, 
          {
            tags: [],
            title: "Learn Redux",
            textBody: "You should really learn Redux",
            id: 4,
          }, 
          {
            tags: [],
            title: "Learn Redux",
            textBody: "You should really learn Redux",
            id: 5,
          }],
        }
      }

    

    render(){
        return(
            <StyledNotesContainer>
                <h3>Your Notes:</h3>
                <StyledNotes>
                    {this.state.notes.map(note => {
                        return <NoteCard note={note}
                                        key={note.id} />
                    })}
                </StyledNotes>
            </StyledNotesContainer>
        );
    }
}

export default NotesContainer;