import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAllNotes,
  getNoteById,
  postNote,
  putNote,
  deleteNote
} from '../actions'

const mapStateToProps = ({ notes }) => ({ notes })

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes()
  }

  render() {
    console.log(this.props.notes)

    return <p>hello world</p>
  }
}

export default connect(
  mapStateToProps,
  { getAllNotes, getNoteById, postNote, putNote, deleteNote }
)(App)
