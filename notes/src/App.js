import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import CreateNote from './components/Notes/CreateNote'
import SidePanel from './components/SidePanel/SidePanel'
import NoteContainer from './components/Notes/NoteContainer'
import ViewCard from './components/Notes/ViewCard'
import EditNote from './components/Notes/EditNote'
import Authentication from './components/Login/Authentication'
import './App.css';

const URL = 'http://localhost:8000/api/notes';

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            user: ''
        };
    }

    addData = () => {
        axios
            .get(URL)
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.addData();
    }

    createNote = (note) => {
        axios
            .post(URL, note)
            .then(() => this.addData())
            .catch(err => console.log(err))
    }

    editNote = (note) => {
        axios
            .put(`${URL}/${note.id}`, note)
            .then(() => this.addData())
            .catch(err => console.log(err))
    }

    deleteNote = (note) => {
        axios
            .delete(`${URL}/${note.id}`)
            .then(() => this.addData())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="App">
                <Route path='/' component={SidePanel} />
                <Route exact path='/' render={(props) => <NoteContainer {...props} notes={this.state.notes} />} />
                <Route exact path='/create' render={(props) => <CreateNote {...props} createNote={this.createNote} />} />
                <Route exact path="/view/:id" render={(props) => <ViewCard {...props} deleteNote={this.deleteNote} />} />
                <Route exact path="/edit" render={(props) => <EditNote {...props} editNote={this.editNote} />} />
            </div>
        );
    }
}
export default Authentication(App);