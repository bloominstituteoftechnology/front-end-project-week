import React, { Component } from 'react';
import SideBar from './components/MainPage/SideNav';
import ViewNote from './components/MainPage/ViewNote';
import DeleteNote from './components/Routes/DeleteNote';
import EditNote from './components/Routes/EditNote';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { fetchingNotes, createNote } from './actions/index';
import NewNote from './components/Routes/NewNote';

const NoteContainer = styled.div`
margin 20px;
border: 1px solid black;
background-color: white;
width: 10%;
height: 150px;
`

class App extends Component {

    componentDidMount() {
        this.props.fetchingNotes();
    };

    render() {
        return (
            <div className="App">
                {this.props.notes.map(note => {
                    return (
                        <NoteContainer>
                            <div className='headline'>{note.title}</div>
                            <div className='content'>{note.textBody}</div>
                        </NoteContainer>
                    )
                })}
                <NewNote />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesReducer.notes,
        createNote: state.createNote
    };
};

export default connect(mapStateToProps, { fetchingNotes, createNote })(App);
