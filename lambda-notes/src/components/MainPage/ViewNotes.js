import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingNotes } from '../../actions/index';
import styled from 'styled-components';

const NotesContainer = styled.div`
display: flex;
width: 100%;
height: 500px;
background-color: #EEEEEE;

`;

const NoteContainer = styled.div`
margin 20px;
border: 1px solid black;
background-color: white;
width: 200px;
height: 150px;
`

const Main = styled.div`
    margin-left: 400px;
    display: flex;
    flex-wrap: wrap;`


class ViewNotes extends Component {

    componentDidMount() {
        this.props.fetchingNotes();
    };

    render() {
        return (
            < Main >
                {this.props.notes.map(note => {
                    return (
                        <NoteContainer>
                            <div className='headline'>{note.title}</div>
                            <div className='content'>{note.textBody}</div>
                        </NoteContainer>
                    )
                })}
            </Main >
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesReducer.notes
    };
}

export default connect(mapStateToProps, { fetchingNotes })(ViewNotes);