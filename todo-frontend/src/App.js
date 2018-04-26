import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get } from 'axios'

import { NoteList } from 'components/NoteList'
import { Sidebar } from 'components/Sidebar'
import { AddNoteForm } from 'components/AddNoteForm'
import { SingleNote } from 'components/Note'

// import { base } from 'base'

const AppWrapper = styled.main`
  text-align: center;
  display: grid;
  grid-template-columns: 25% 1fr;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  /** @param {id, title, content} note */
  updateNote(note) {
    // first remove old note @id
    const filteredNotes = this.state.notes.filter(val => val.id !== note.id)

    // then add updated note to front of filtered notes
    filteredNotes.unshift(note)

    // now this is our new state
    this.setState(prevState =>
      Object.assign({}, prevState, { notes: filteredNotes })
    )
  }

  async componentDidMount() {
    const { data } = await get('/api/todos')
    this.setState(prevState => Object.assign({}, prevState, { notes: data }))
  }

  createNote(note) {
    note.id = this.state.notes.length + 1
    this.setState(prevState =>
      Object.assign({}, prevState, { notes: [note, ...prevState.notes] })
    )
  }

  deleteNote(id) {
    const updatedNotes = this.state.notes.filter(note => +note.id !== +id)
    this.setState(prevState =>
      Object.assign({}, prevState, { notes: [...updatedNotes] })
    )
  }

  getSingleNote(id, props) {
    return (
      <SingleNote
        {...this.state.notes.filter(note => +note.id === +id)[0]}
        {...props}
        onDelete={id => this.deleteNote(id)}
        onUpdate={note => this.updateNote(note)}
      />
    )
  }

  render() {
    return (
      <AppWrapper>
        <Sidebar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <NoteList {...props} notes={[...this.state.notes]} />
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/new"
            render={props => (
              <AddNoteForm
                {...props}
                addNote={nNote => this.createNote(nNote)}
              />
            )}
          />
        </Switch>
        <Switch>
          <Route
            path="/notes/:id"
            render={props => this.getSingleNote(props.match.params.id, props)}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/404"
            render={() => <h3>This page is unavailable</h3>}
          />
        </Switch>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  fetchTodos: PropTypes.func,
  createTodo: PropTypes.func,
  todos: PropTypes.array
}

export default App

export { App }
