

//== Application ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import './App.css';
import NoteList from './components/note-list.js';


//== Components ================================================================

//-- App Component -------------------------------
export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header title="Lambda Notes" />
                <Content title="Your Notes">
                    <NoteList />
                </Content>
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
                <a class="button">View Your Notes</a>
                <a>+ Create New Note</a>
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
