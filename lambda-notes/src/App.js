import React, { Component } from 'react';
import SideBar from './components/MainPage/SideNav';
import ViewNotes from './components/MainPage/ViewNotes';
import NewNote from './components/Routes/NewNote';
import SingleNote from './components/MainPage/ViewNotes';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingNotes, createNote } from './actions/index';

class App extends Component {

    render() {
        return (
            <div className="App">
                <SideBar />
                <Route path='/your-notes' exact render={() => { return (<ViewNotes />); }} />
                <Route path='/create-note' exact render={() => { return (<NewNote />); }} />
                <Route path='/view-note' exact render={() => { return (<SingleNote />); }} />
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
