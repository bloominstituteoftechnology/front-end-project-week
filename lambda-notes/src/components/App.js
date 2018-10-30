import React, { Component } from 'react'
import NoteList from './NoteList'
import '../styles/index.css'
import AddNote from './AddNote'
import axios from 'axios'
import { Route } from 'react-router-dom'
import ViewNote from '../components/ViewNote'

const blankNote = {
    title: '',
    textBody: '',
    tags: [],
}

class App extends Component {
    state = {
        notes: [],
        note: {
            title: '',
            textBody: '',
            tags: [],
        },
        editingId: null,
        activeNote: null,
        isEditing: false,
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

    getNoteById = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/all/${id}`)
            .then(res => this.setState({ activeNote: res.data }))
            .catch(err => console.log(err))
    }

    addNote = e => {
        e.preventDefault()
        e.target.reset()
        axios
            .post('https://fe-notes.herokuapp.com/note/create', this.state.note)
            .then(res => {
                this.setState({ notes: res.data })
                this.props.history.push('/note-list')
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            note: {
                ...this.state.note,
                [name]: value,
            },
        })
    }

    deleteNote = (e, id) => {
        e.preventDefault()
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(res => {
                this.setState({ notes: res.data })
                this.props.history.push('/note-list')
            })
            .catch(err => console.log(err))
    }

    updateNote = () => {
        axios
            .put(`https://fe-notes/herokuapp.com/note/edit/${this.state.editingId}`, this.state.note)
            .then(res => {
                this.setState({
                    notes: res.data,
                    editingId: null,
                    note: blankNote,
                })
            })
            .catch(err => console.log(err))
    }

    setUpUpdateForm = (e, note) => {
        e.preventDefault()
        this.setState({
            note,
            isEditing: true,
            editingId: note._id,
        })
    }

    render() {
        return (
            <div>
                <Route exact path='/' component={App} />
                <Route
                    exact
                    path='/note-list'
                    render={props => <NoteList {...props} notes={this.state.notes} getNoteById={this.getNoteById} />}
                />
                )}
                <Route
                    path='note-list/:id'
                    render={props => (
                        <Note
                            {...props}
                            deleteNote={this.deleteNote}
                            note={this.state.activeNote}
                            updateNote={this.setUpUpdateForm}
                        />
                    )}
                />
                <Route
                    path='/add-note'
                    render={props => (
                        <AddNote
                            {...props}
                            addNote={this.addNote}
                            handleChange={this.handleChange}
                            note={this.state.note}
                            isEditing={this.state.isEditing}
                            updateNote={this.updateNote}
                        />
                    )}
                />
            </div>
        )
    }
}

export default App
