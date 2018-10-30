import React, { Component } from 'react'
import NoteList from './NoteList'
import '../styles/index.css'
import NoteForm from './NoteForm'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Note from './Note'
import Home from './Home'
import { connect } from 'react-redux'
import { getNotes } from '../actions/index'

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
        isEditing: false,
        activeNote: [],
    }

    componentDidMount() {
       this.props.getNotes()
    }

    getNoteById = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(res => {
                this.setState({ activeNote: res })
            })
            .catch(err => console.log(err))
    }
    addNote = () => {
        axios
            .post('https://fe-notes.herokuapp.com/note/create', this.state.note)
            .then(res => this.setState({ ...this.state.notes, note: res.data }))
            .then(this.setState({ state: this.state }))
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
            activeNote: {},
            editingId: note._id,
        })
    }

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route
                    exact
                    path='/note-list'
                    render={props => (
                        <NoteList
                            {...props}
                            notes={this.props.notes}
                            getNoteById={this.getNoteById}
                            state={this.state}
                        />
                    )}
                />
                <Route
                    path='note-list/:id'
                    render={props => (
                        <Note
                            {...props}
                            deleteNote={this.deleteNote}
                            activeNote={this.state.activeNote}
                            updateNote={this.setUpUpdateForm}
                        />
                    )}
                />
                <Route
                    path='/note-form'
                    render={props => (
                        <NoteForm
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
const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        gettingFriends: state.gettingFriends,
    }
}

export default connect(mapStateToProps, { getNotes })(App)
