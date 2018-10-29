import React, { Component } from 'react'
import NoteList from './NoteList'
import '../styles/index.css'
import AddNote from './AddNote'
import axios from 'axios'
import { Route } from 'react-router-dom'
import ViewNote from '../components/ViewNote'
import { Link } from 'react-router-dom'

class App extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(res => {
                this.setState({
                    notes: res.data,
                })
            })
            .catch(err => {
                console.log('error', err)
            })
    }

    addNote = e => {
        const { title, textBody } = this.state
        e.preventDefault()
        e.target.reset()
        axios
            .post('https://fe-notes.herokuapp.com/note/create', { title, textBody })
            .then(res => {
                this.setState({
                    notes: [ ...this.state.notes, { title, textBody, _id: res } ],
                })
            })
            .catch(err => {
                console.log('POST ERROR', err)
            })
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value,
        })
    }

    render() {
        const id = this.state.notes.find(note => this.state.notes._id === `${note.id}`)
        return (
            <div>
                <Route exact path='/' render={props => <NoteList {...props} notes={this.state.notes} />} />
                <Route
                    path='/addnote'
                    render={props => <AddNote {...props} addNote={this.addNote} handleChange={this.handleChange} />}
                />
                <Route path={`/${id}`} render={props => <ViewNote {...props} />} />
            </div>
        )
    }
}

export default App
