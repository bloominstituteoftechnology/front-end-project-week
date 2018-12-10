import React from 'react';
import SmallNote from './SmallNote';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

const NotesContainer = styled.div`
    padding: 3rem;
    margin-left: 22rem;

    h2 {
        margin: 3rem 0;
        font-size: 2rem;
        font-weight: bold;
    }
`

const YourNotes = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const NotesLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

class NotesList extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    render(){
        return(
            <NotesContainer>
                <h2>Your Notes:</h2>
                <YourNotes>
                    {this.props.notes.map(note => (
                        <NotesLink key={note._id} exact to={`/note/${note._id}`}>
                            <SmallNote  noteData={note} />
                        </NotesLink>
                    ))}
                </YourNotes>
            </NotesContainer>
        );
    }
} 

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, { fetchNotes })(NotesList);