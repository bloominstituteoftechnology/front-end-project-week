import React from 'react';
import styled from 'styled-components';
import NoteCard from '../components/NoteCard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

const Card = posed.div({
    enter: {opacity: 1, translateX: 0, transition: { duration: 1000 }},
    exit: {opacity: 0, translateX: 25},
})

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

const StyledCard = styled(Card)`
    margin: 1%;
`;

const NotesContainer = props => {
        return(
            
            <StyledNotesContainer>
                <h3>Your Notes:</h3>
                <StyledNotes>
                    <PoseGroup preEnterPose={'exit'} enterPose={'enter'}>
                        {props.notes.map(note => {
                            return <StyledCard key={note.id} ><NoteCard note={note}
                                            key={note._id} /></StyledCard>
                        })}
                    </PoseGroup>
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