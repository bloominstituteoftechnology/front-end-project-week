

//== Application ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import './App.css';
import NoteList from './components/note-list.js';
import NoteCreator from './components/note-creator.js';
import {Route, Link} from 'react-router-dom';
import * as actions from './actions';


//== Components ================================================================

//-- App Component -------------------------------
export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header title="Lambda Notes" />
                <Route exact path="/" render={() => (
                    <Content title="Your Notes">
                        <NoteList />
                    </Content>
                )} />
                <Route path="/create" render={() => (
                    <Content title="Create New Note">
                        <NoteCreator />
                    </Content>
                )} />
            </div>
        );
    }
}

//-- Header Component ----------------------------
function Header(props) {
    return (
        <header>
            <h1>
                {props.title}
            </h1>
            <nav>
                <Link to="/" onClick={actions.getNotes}>
                    <span class="button">View Your Notes</span>
                </Link>
                <Link to="/create">
                    <span class="button">+ Create New Note</span>
                </Link>
            </nav>
        </header>
    );
}

//-- Content Component ---------------------------
function Content(props) {
    return (
        <main className="view">
            <h2 className="view-title">
                {props.title}:
            </h2>
            <div className="view-body">
                {props.children}
            </div>
        </main>
    );
}
