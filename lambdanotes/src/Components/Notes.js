import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/index';
import Note from './Note'; 
import styled from 'styled-components';

const Container = styled.div`
    width: 650px;
`;

const NotesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

class Notes extends Component {
    render() {
        return (
            <Container>
                <h3>Your Notes:</h3>
                <NotesContainer>
                    {this.props.notes.map(note => (
                        <Note note={note} />
                    ))}
                </NotesContainer>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state
    }
}

export default connect(mapStateToProps, { getNotes })(Notes);