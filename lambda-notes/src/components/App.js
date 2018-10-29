import React, { Component } from 'react'
import NoteList from './NoteList'
import '../styles/index.css'
import AddNote from './AddNote'
import axios from 'axios'

class App extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        axios
            .get('https://killer-notes.herokuapp.com/note/get/all')
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
            .post('https://killer-notes.herokuapp.com/note/create', { title, textBody })
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
        return (
            <div>
                <NoteList notes={this.state.notes} />
                <AddNote addNote={this.addNote} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default App
