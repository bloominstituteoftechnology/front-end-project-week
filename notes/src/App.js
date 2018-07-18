import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CreateNote from './components/Notes/CreateNote'
import SidePanel from './components/SidePanel/SidePanel'
import NoteContainer from './components/Notes/NoteContainer'
import ViewCard from './components/Notes/ViewCard'
import EditNote from './components/Notes/EditNote'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [{ id: 0, title: 'hello', description: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt  ' }],
        };
    }

    createNote = (note) => {
        let notes = this.state.notes.slice();
        notes.push(note)
        this.setState({ notes })
    }

    editNote = (note) => {
        let notes = this.state.notes.slice();
        for (let i = 0; i < notes.length; ++i)
            if (notes[i].id === note.id) {
                notes[i].title = note.title;
                notes[i].description = note.description;
            }
        this.setState({ notes })
    }

    render() {
        return (
            <div className="App">
                <Route path='/' component={SidePanel} />
                <Route exact path='/' render={(props) => <NoteContainer {...props} notes={this.state.notes} />} />
                <Route exact path='/create' render={(props) => <CreateNote {...props} createNote={this.createNote} />} />
                <Route exact path="/view/:id" render={(props) => <ViewCard {...props} notes={this.state.notes} />} />
                <Route exact path="/edit" render={(props) => <EditNote {...props} editNote={this.editNote} />} />
            </div>
        );
    }
}
export default App;