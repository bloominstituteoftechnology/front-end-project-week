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

const mapStateToProps = ({ notes }) => ({ notes })

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes()
  }

  render() {
    const { notes } = this.props
    console.log(notes)

    return (
      <PageContainer>
        <Sidebar />
        <DisplayAll notes={notes} />
      </PageContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  { getAllNotes, getNoteById, postNote, putNote, deleteNote }
)(App)
