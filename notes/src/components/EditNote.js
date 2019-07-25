import React, { Component } from 'react';

import { updateNote, fetchNoteById } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

class NewNote extends Component {
  state = {
    title: '',
    content: '',
    updated: false
  }

  componentDidUpdate() {
   if (!this.state.updated && this.props.note.length === 1) {
     this.setState({ title: this.props.note[0].title, content: this.props.note[0].content, updated: true})
   }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchNoteById(id)
    this.setState({updated: false})
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.noteList.find(item => item._id = this.props.match.params.id)._id
    let newNote = {
      title: this.state.title,
      content: this.state.content,
      id: id
    }

    this.props.updateNote(newNote)
    this.setState({ title:'', content:'' })

    const {history} = this.props
    history.push(`/note-list/${id}`)

  }

  render() {
    return (
      <React.Fragment>
      <h2 className='notes-title'> Edit Note:</h2>
      <NoteForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state}
      />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    note: state.notes
  }
}

export default withRouter(connect(mapStateToProps, { updateNote, fetchNoteById }) (NewNote))
