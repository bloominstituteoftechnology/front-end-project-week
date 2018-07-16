import React, { Component } from 'react';
import styled from 'styled-components';
import NoteCard from '../components/NoteCard';
import data from '../demoData';

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
          notes: [],
        }
      }

    componentDidMount(){
        this.setState({notes: data});
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