import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/index';
import Note from './Note'; 
import styled from 'styled-components';

const Container = styled.div`
    width: 675px;
    border: 1px solid red; 
`;

class Notes extends Component {
    render() {
        return (
            <Container>
                <h3>Your Notes:</h3>
                <div>
                    {this.props.notes.map(note => (
                        <Note note={note} />
                    ))}
                </div>
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