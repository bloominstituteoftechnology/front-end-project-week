import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
import { PortalWithState } from 'react-portal'
import Markdown from './Markdown'
import LinkButton from '../buttons/LinkButton'
import ActionButton from '../buttons/ActionButton'
import { fetchNote, deleteNote } from '../../state/actions'

class NoteDetail extends Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id)
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.note._id)
    this.props.history.push('')
  }


  render = () => (
    <div className="note-detail-view">
      <div className="controls">
        <LinkButton 
          to={`/edit/${this.props.note._id}`}
          text='Edit' />
        <PortalWithState closeOnOutsideClick closeOnEsc>
          {DeleteModal(this.deleteNote)}
        </PortalWithState>
      </div>
      <Note {...this.props.note} />
    </div>
  )
}

const Note = ({ _id, title, content }) => (
  <div className="note">
    <h1>{title}</h1>
    <Markdown 
      noteid={_id}
      markdown={content} />
  </div>
)

const DeleteModal = deleteNote => ({ openPortal, closePortal, isOpen, portal }) => (
  <div>
    <ActionButton type='delete' text='Delete' onClick={openPortal} />
    {portal(
      <div className="modal-mat">
        <div className="modal-dialog">
          <h5>Are you sure you want to delete this?</h5>
          <div className="controls">
            <ActionButton 
              type='delete'
              text='Delete'
              onClick={deleteNote} />
            <ActionButton
              text='No'
              onClick={closePortal} />
          </div>
        </div>
      </div>
    )}
  </div>
)

const stateToProps = ({ currentNote }) => ({ note: currentNote })
const dispatchToProps = { fetchNote, deleteNote }

export default connect(stateToProps, dispatchToProps)(NoteDetail)