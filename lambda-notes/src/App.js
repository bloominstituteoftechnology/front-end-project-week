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
width: 200px;
height: 150px;
`

const Main = styled.div`
    margin-left: 400px;
    display: flex;
    flex-wrap: wrap;`

class App extends Component {

    componentDidMount() {
        this.props.fetchingNotes();
    };

    render() {
        return (
            <div className="App">
                <SideBar />
                <Main>
                    {this.props.notes.map(note => {
                        return (
                            <NoteContainer>
                                <div className='headline'>{note.title}</div>
                                <div className='content'>{note.textBody}</div>
                            </NoteContainer>
                        )
                    })}
                </Main>
                <NewNote />
                <DeleteNote />
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
