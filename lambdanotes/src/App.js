import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import NoteList from './components/Notes/NoteList';
import './App.css';
import NoteForm from "./components/Notes/NoteForm";
import NoteDetail from './components/Notes/NoteDetail'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {id: 0, 'title': 'Note 1', 'content': 'some test'},
                {id: 1, 'title': 'Note 2', 'content': 'some test'},
                {id: 2, 'title': 'Note 3', 'content': 'some test'},
                {id: 3, 'title': 'Note 4', 'content': 'some test'},
                {id: 4, 'title': 'Note 5', 'content': 'some test'},
                {id: 5, 'title': 'Note 6', 'content': 'some test'},
                {id: 6, 'title': 'Note 7', 'content': 'some test'},
                {id: 7, 'title': 'Note 8', 'content': 'some test'},
                {id: 8, 'title': 'Note 9', 'content': 'some test'},
                {id: 0, 'title': 'Note 1', 'content': 'some test'},
                {id: 1, 'title': 'Note 2', 'content': 'some test'},
                {id: 2, 'title': 'Note 3', 'content': 'some test'},
                {id: 3, 'title': 'Note 4', 'content': 'some test'},
                {id: 4, 'title': 'Note 5', 'content': 'some test'},
                {id: 5, 'title': 'Note 6', 'content': 'some test'},
                {id: 6, 'title': 'Note 7', 'content': 'some test'},
                {id: 7, 'title': 'Note 8', 'content': 'some test'},
                {id: 8, 'title': 'Note 9', 'content': 'some test'}
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className="row">
                        <div className="col-3 left__side">
                            <h2 className='sidebar__header'>Lambda Notes</h2>
                            <a href='/' className='sidebar__button'>
                                View Notes
                            </a>
                            <a href='/createNewNote' className='sidebar__button'>
                                +Create New Note
                            </a>
                        </div>
                        <Route exact path='/' render={() => <NoteList notes={this.state.notes}/>}/>
                        <Route path='/createNewNote'  render={() => <NoteForm addnote={this.addNote}/> }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
