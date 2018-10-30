

//== Application ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import './App.css';
import NoteList from './components/note-list.js';
import {Route, Link} from 'react-router-dom';


//== Components ================================================================

//-- App Component -------------------------------
export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header title="Lambda Notes" />
                <Route exact path="/" render={props => (
                    <Content title="Your Notes">
                        <NoteList />
                    </Content>
                )} />
                <Route path="/test" render={props => (
                    <Content title="Your Notes">
                        <h1>Hi neighbor!</h1>
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
                <Link to="/">View Your Notes</Link>
                <Link to="/test">+ Create New Note</Link>
            </nav>
        </header>
    );
}

//-- Content Component ---------------------------
function Content(props) {
    return (
        <main className="view">
            <h2 className="view-title">
                {props.title}
            </h2>
            <div className="view-body">
                {props.children}
            </div>
        </main>
    );
}
