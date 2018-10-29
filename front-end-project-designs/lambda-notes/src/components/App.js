import React, { Component } from 'react'
import NoteList from './NoteList'
import '../styles/index.css'
import AddNote from './AddNote'

class App extends Component {
    state = {
        notes: [],
    }

    addNote = e => {
        e.preventDefault()
        e.target.reset()
        this.setState({
            notes: [ ...this.state.notes, { title: this.state.title, text: this.state.text, id: Date.now() } ],
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
        return (
            <div>
                <NoteList notes={this.state.notes} />
                <AddNote addNote={this.addNote} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default App
