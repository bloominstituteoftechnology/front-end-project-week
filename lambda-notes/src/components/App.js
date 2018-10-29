import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAllNotes,
  getNoteById,
  postNote,
  putNote,
  deleteNote
} from '../actions'
import { PageContainer } from '../styles/App'
import Sidebar from './Sidebar'
import DisplayAll from './DisplayAll'
import DisplayOne from './DisplayOne'
import Add from './Add'
import Edit from './Edit'

const mapStateToProps = ({ notes }) => ({ notes })

class App extends Component {
  state = {
    pageToDisplay: 'all'
  }

  componentDidMount() {
    this.props.getAllNotes()
  }

  changeDisplayedPage = page => {
    this.setState({ pageToDisplay: page })
  }

  render() {
    const { pageToDisplay } = this.state
    const { notes, postNote } = this.props
    const { changeDisplayedPage } = this
    console.log(notes)

    return (
      <PageContainer>
        <Sidebar changeDisplayedPage={changeDisplayedPage} />

        {pageToDisplay === 'all' && <DisplayAll notes={notes} />}

        {pageToDisplay.length > 20 && (
          <DisplayOne note={notes.filter(_id => _id === pageToDisplay)} />
        )}

        {pageToDisplay === 'create' && <Add postNote={postNote} />}

        {pageToDisplay === 'edit' && <Edit />}
      </PageContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  { getAllNotes, getNoteById, postNote, putNote, deleteNote }
)(App)
