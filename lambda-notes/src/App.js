import React, { Component } from 'react';
import SideBar from './components/MainPage/SideNav';
import ViewNotes from './components/MainPage/ViewNotes';
import NewNote from './components/Routes/NewNote';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingNotes, createNote } from './actions/index';

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

    render() {
        return (
            <div className="App">
                <SideBar />
                <Route path='/notes' exact render={() => { return (<ViewNotes />); }} />
                <Route path='/create-note' exact render={() => { return (<NewNote />); }} />
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
