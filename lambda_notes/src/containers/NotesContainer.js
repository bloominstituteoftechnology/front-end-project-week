import React from 'react';
import styled from 'styled-components';
import NoteCard from '../components/NoteCard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const StyledNotesContainer = styled.div`
    padding: 5%;
    background: #F3F3F3;
    width: 100%;
    height: 100vh;
    min-height: 100%;
    margin-left: 24%;
`;

const StyledNotes = styled.div`
    display: flex;
    flex-flow: row wrap;

`;

const NotesContainer = props => {
        return(
            <StyledNotesContainer>
                <h3>Your Notes:</h3>
                <StyledNotes>
                    {props.notes.map(note => {
                        return <NoteCard note={note}
                                        key={note._id} />
                    })}
                </StyledNotes>
            </StyledNotesContainer>
        );
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        fetching: state.fetching,
        fetched: state.fetched,
        adding: state.adding,
        added: state.added,
        error: state.error
    }
   
}

export default withRouter(connect(mapStateToProps, {})(NotesContainer));