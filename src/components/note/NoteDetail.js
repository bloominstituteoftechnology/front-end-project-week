import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Markdown from './Markdown'
import LinkButton from '../buttons/LinkButton'
import ActionButton from '../buttons/ActionButton'
import DeleteModal from './DeleteModal'

class Note extends Component {
  state = {
    modalHidden: true
  }

  deleteNote = () => {
    const { firebase, match, history } = this.props
    firebase.remove(`notes/${match.params.id}`, () => history.push('')) // Change history in a callback to avoid arriving home before store update
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

const mapStateToProps = (state, props) => ({})

export default connect(mapStateToProps)(Note)