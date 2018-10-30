import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getAllNotes,
  getNoteById,
  postNote,
  putNote,
  deleteNote,
  addChecked,
  removeChecked,
  deleteAllChecked,
  clearAllChecked
} from '../actions'
import { PageContainer } from '../styles/App'
import Sidebar from './Sidebar'
import DisplayAll from './DisplayAll'
import DisplayOne from './DisplayOne'
import Add from './Add'

const mapStateToProps = ({ notes, checked }) => ({ notes, checked })

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes()
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
      history
    } = this.props

    console.log(notes)

    return (
      <PageContainer>
        <Sidebar
          deleteAllChecked={deleteAllChecked}
          getAllNotes={getAllNotes}
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
              deleteNote={deleteNote}
              addChecked={addChecked}
              removeChecked={removeChecked}
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
      getNoteById,
      postNote,
      putNote,
      deleteNote,
      addChecked,
      removeChecked,
      deleteAllChecked,
      clearAllChecked
    }
  )(App)
)
