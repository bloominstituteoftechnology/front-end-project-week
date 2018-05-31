import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
import Markdown from './Markdown'
import LinkButton from '../buttons/LinkButton'
import ActionButton from '../buttons/ActionButton'
import DeleteModal from './DeleteModal'
import { fetchNote, deleteNote } from '../../state/actions'

class Note extends Component {
  state = {
    modalHidden: true
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id)
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.note._id)
    this.props.history.push('')
  }

  toggleModal = () => this.setState({ modalHidden: !this.state.modalHidden })

  render() {
    const { note, match } = this.props
    return (
      <div className="note-detail-view">
        <DeleteModal 
          hidden={this.state.modalHidden} 
          deleteNote={this.deleteNote}
          hideSelf={this.toggleModal} />
        <div className="controls">
          <LinkButton 
            to={`/edit/${match.params.id}`}
            text='Edit' />
          <ActionButton
            type='delete'
            text='Delete'
            onClick={this.toggleModal} />
        </div>
        <div className="note">
          <h1>{note.title}</h1>
          <Markdown 
            noteId={match.params.id}
            markdown={note.content} />
        </div>
      </div>
    )
  }
}

const stateToProps = ({ currentNote }) => ({ note: currentNote })
const dispatchToProps = { fetchNote, deleteNote }

export default connect(stateToProps, dispatchToProps)(Note)