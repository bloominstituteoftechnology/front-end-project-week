import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, searchNotes } from '../actions/index';
import Note from './Note'; 
import styled from 'styled-components';


const Container = styled.div`
    width: 650px;
    padding-top: 50px;
`;

const NotesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
 

class Notes extends Component {
    constructor(props) {
        super();
        this.state = {
            criteria: ''
        }
    }

    handleSearchbar = e => {
        e.preventDefault();
        this.props.searchNotes(this.state.criteria);
        this.setState({ criterial: '' })
    }

    updateInputChange = e => {
        this.setState({ criteria: e.target.value})
    }

    render() {
        return (
            <Container>
                <form>
                    <input onChange={this.updateInputChange} type='text' placeholder='' />
                    <button onClick={this.handleSearchbar}>search</button> 
                </form>
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
        notes: state.notesReducer
    }
}

export default connect(mapStateToProps, { getNotes, searchNotes })(Notes);