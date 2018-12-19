

//== Application ===============================================================

//-- Dependencies --------------------------------
import './client.css';
import React from 'react';
import {Route, Link} from 'react-router-dom';
import * as actions from './actions';
import NoteList from './components/note-list.js';
import NoteCreator from './components/note-creator.js';
import NoteEditor from './components/note-editor.js';
import NoteView from './components/note-view.js';


//== Components ================================================================

//-- Main Application Component ------------------
export default class Client extends React.Component {
    render() {
        return (
            <div className="app">
                <Header title="Lambda Notes" />
                <main className="view">
                    <Route exact path="/" component={NoteList} />
                    <Route path="/create" component={NoteCreator} />
                    <Route path="/edit/:id" component={NoteEditor} />
                    <Route path="/note/:id" component={NoteView} />
                </main>
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
                    <span className="button">View Your Notes</span>
                </Link>
                <Link to="/create">
                    <span className="button">+ Create New Note</span>
                </Link>
            </nav>
        </header>
    );
}
