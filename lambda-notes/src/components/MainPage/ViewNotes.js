import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchingNotes } from '../../actions/index';
import styled from 'styled-components';

const Header = styled.div`
display: flex;
width: 100%;
`

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
                <Header><h1>Your Notes:</h1></Header>
                {this.props.notes.map(note => (
                    <SingleNote key={note.title} note={note} />
                ))}
            </Main >
        );
    }
}

function SingleNote({ note }) {
    const { tags, title, textBody } = note;
    return (
        <Link to='view-note'>
            <NoteContainer>
                <div className='headline'>{note.title}</div>
                <div className='content'>{note.textBody}</div>
            </NoteContainer>
        </Link>
    );
}

const mapStateToProps = state => {
    return {
        notes: state.notesReducer.notes
    };
}

export default connect(mapStateToProps, { fetchingNotes })(ViewNotes);