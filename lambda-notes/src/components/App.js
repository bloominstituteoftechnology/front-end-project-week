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

const mapStateToProps = ({ notes }) => ({ notes })

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes()
  }

  render() {
    console.log(this.props.notes)

    return (
      <PageContainer>
        <Sidebar />
        <p>hello world</p>
      </PageContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  { getAllNotes, getNoteById, postNote, putNote, deleteNote }
)(App)
