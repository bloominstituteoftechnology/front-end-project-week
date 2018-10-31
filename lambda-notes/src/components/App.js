import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getAllNotes,
  postNote,
  putNote,
  deleteNote,
  addChecked,
  removeChecked,
  deleteAllChecked,
  clearAllChecked,
  checkAll,
  bulkAddNotes,
  removeSelfAdded,
  setSearchParam
} from '../actions'
import { PageContainer } from '../styles/App'
import Sidebar from './Sidebar'
import DisplayAll from './DisplayAll'
import DisplayOne from './DisplayOne'
import Add from './Add'

const mapStateToProps = ({ notes, checked, searchParam }) => ({
  notes,
  checked,
  searchParam
})

const zombieNote = {
  title: 'Zombie Note',
  text:
    'This is a zombie note. If you delete it it will come back to life within five seconds.'
}

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes()

    const keepZombieAlive = setInterval(() => {
      const { notes, postNote, getAllNotes } = this.props
      getAllNotes()

      for (let i = 0; i < notes.length; i++) {
        if (notes[i].title === zombieNote.title) {
          break
        }

        if (i === notes.length - 1) {
          postNote(zombieNote)
        }
      }
    }, 5000)
  }

  render() {
    const {
      notes,
      checked,
      postNote,
      putNote,
      deleteNote,
      addChecked,
      removeChecked,
      deleteAllChecked,
      getAllNotes,
      clearAllChecked,
      checkAll,
      bulkAddNotes,
      removeSelfAdded,
      setSearchParam,
      searchParam,
      history
    } = this.props

    return (
      <PageContainer>
        <Sidebar
          deleteAllChecked={deleteAllChecked}
          getAllNotes={getAllNotes}
          clearAllChecked={clearAllChecked}
          checkAll={checkAll}
          bulkAddNotes={bulkAddNotes}
          removeSelfAdded={removeSelfAdded}
          setSearchParam={setSearchParam}
          searchParam={searchParam}
        />

        <Route
          exact
          path="/"
          render={props => (
            <DisplayAll
              {...props}
              history={history}
              notes={notes}
              checked={checked}
              addChecked={addChecked}
              removeChecked={removeChecked}
              searchParam={searchParam}
            />
          )}
        />

        <Route
          path="/note/:id"
          render={props => (
            <DisplayOne
              {...props}
              history={history}
              deleteNote={deleteNote}
              putNote={putNote}
              {...notes.filter(({ _id }) => _id === props.match.params.id)[0]}
            />
          )}
        />

        <Route
          path="/add"
          render={props => (
            <Add {...props} history={history} postNote={postNote} />
          )}
        />
      </PageContainer>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getAllNotes,
      postNote,
      putNote,
      deleteNote,
      addChecked,
      removeChecked,
      deleteAllChecked,
      clearAllChecked,
      bulkAddNotes,
      removeSelfAdded,
      checkAll,
      setSearchParam
    }
  )(App)
)
