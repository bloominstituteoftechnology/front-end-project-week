import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get } from 'axios'

import { NoteList } from 'components/NoteList'
import { Sidebar } from 'components/Sidebar'
import { AddNoteForm } from 'components/AddNoteForm'

// import { base } from 'base'

const AppWrapper = styled.main`
  text-align: center;
  display: grid;
  grid-template-columns: 25% 1fr;
`

class App extends Component {
  constructor() {
    super()
    this.updateNotes = this.updateNotes.bind(this)
    this.state = {
      notes: []
    }
  }

  updateNotes(note) {
    const notes = [...this.state.notes]
    notes[note.id] = note

    this.setState({ notes })
    this.createTodo.bind(this)
  }
  async componentDidMount() {
    // console.log(base)
    // this.notesRef = base.syncState('/notes', {
    //   context: this,
    //   state: 'notes'
    // })
    const { data } = await get('/api/todos')
    this.setState(prevState => Object.assign({}, prevState, { notes: data }))
  }

  componentWillUnmount() {
    // base.removeBinding(this.notesRef)
  }

  createTodo(note) {
    note.id = this.state.notes.length + 1
    this.setState(prevState =>
      Object.assign({}, prevState, { notes: [note, ...prevState.notes] })
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
                addNote={nTodo => this.createTodo(nTodo)}
              />
            )}
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
