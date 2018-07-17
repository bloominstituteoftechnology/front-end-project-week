import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CreateNote from './components/Notes/CreateNote'
import SidePanel from './components/SidePanel/SidePanel'
import NoteContainer from './components/Notes/NoteContainer'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        };
    }
    componentDidMount() {
        let note = this.state.notes.slice()
        return this.setState({ notes: note })
    }
    createNote = (note) => {
        let notes = this.state.notes.slice();
        notes.push(note)
        this.setState({ notes })
    }
    render() {
        return (
            <div className="App">
                <Route path='/' component={SidePanel} />
                <Route exact path='/notes' render={(props) => <NoteContainer {...props} notes={this.state.notes} />} />
                <Route exact path='/create' render={(props) => <CreateNote {...props} createNote={this.createNote} />} />
            </div>
        );
    }

}
export default App;