

//== Application ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import * as actions from './actions';
import NoteList from './components/note-list.js';
import NoteCreator from './components/note-creator.js';
import NoteView from './components/note-view.js';


//== Components ================================================================

//-- Main Application Component ------------------
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
                <Route path="/note/:id" render={() => (
                    <Content>
                        <NoteView />
                    </Content>
                )} />
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
                    <span className="button">View Your Notes</span>
                </Link>
                <Link to="/create">
                    <span className="button">+ Create New Note</span>
                </Link>
            </nav>
        </header>
    );
}

//-- Content Component ---------------------------
function Content(props) {
    let titleHeader;
    if(props.title){
        titleHeader = <h2 className="view-title" children={props.title} />;
    }
    return (
        <main className="view">
            {titleHeader}
            <div className="view-body">
                {props.children}
            </div>
        </main>
    );
}
