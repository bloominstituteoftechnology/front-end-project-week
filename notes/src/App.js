import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CreateNote from './components/Notes/CreateNote'
import SidePanel from './components/SidePanel/SidePanel'
import NoteContainer from './components/Notes/NoteContainer'
import ViewCard from './components/Notes/ViewCard'
import EditNote from './components/Notes/EditNote'
import Authentication from './components/Login/Authentication'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            user: ''
        };
    }

    componentDidMount() {
        let user = localStorage.getItem('user');
        if (localStorage.getItem(`myNotes`)) {
            console.log(`${user} Notes`)
            let notes = JSON.parse((localStorage.getItem(`myNotes`)))
            this.setState({ notes, user })
        }
    }

    createNote = (note) => {
        let notes = this.state.notes.slice();
        note.id = notes.length + 1;
        notes.push(note);
        this.setState({ notes });
        localStorage.setItem(`myNotes`, JSON.stringify(notes))
    }

    editNote = (note) => {
        let notes = this.state.notes.slice();
        for (let i = 0; i < notes.length; ++i)
            if (notes[i].id === note.id) {
                notes[i].title = note.title;
                notes[i].description = note.description;
            }
        localStorage.setItem(`myNotes`, JSON.stringify(notes))
        this.setState({ notes })

    }
    deleteNote = (note) => {
        let notes = this.state.notes.slice();
        let newNotes = notes.filter(found => {
            return found.id !== note.id;
        })
        localStorage.setItem(`myNotes`, JSON.stringify(newNotes))
        this.setState({ notes: newNotes })
    }



    render() {
        return (
            <div className="App">
                <Route path='/' component={SidePanel} />
                <Route exact path='/' render={(props) => <NoteContainer {...props} notes={this.state.notes} />} />
                <Route exact path='/create' render={(props) => <CreateNote {...props} createNote={this.createNote} />} />
                <Route exact path="/view/:id" render={(props) => <ViewCard {...props} notes={this.state.notes} deleteNote={this.deleteNote} />} />
                <Route exact path="/edit" render={(props) => <EditNote {...props} editNote={this.editNote} />} />
            </div>
        );
    }
}
export default Authentication(App);