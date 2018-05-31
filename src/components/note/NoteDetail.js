import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase'
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
    const { firebase, note, match } = this.props
    return !isLoaded(note)
      ? <h1>Loading Note</h1>
      : isEmpty(note)
        ? <h1>No Note with id "{match.params.id}"</h1>
        : (
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

const mapStateToProps = (state, props) => {
  return { note: getVal(state.data, `notes/${props.match.params.id}`)}
}

const mapListenersToProps = (props) => {
  return [ 'notes' ]
}

export default compose(
  firebaseConnect(mapListenersToProps),
  connect(mapStateToProps)
)(Note)