import React, { Component } from 'react';

import { Route, withRouter, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../actions'
import DeleteModal from './DeleteModal'

class NoteOptions extends Component {
  state = {
    showModal: false
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal})
  }

  render() {
    let note = this.props.noteList.find(item => item.id == this.props.match.params.id)
    if (note) {
      return(
        <div className="note-options">
          <NavLink to={`/edit-note/${ans.id}`}>edit</NavLink>
          <button
            className='delete-button'
            onClick={this.handleModal}>delete</button>
            {
              this.state.showModal &&
              <DeleteModal
                handleModal={this.handleModal}
              />
            }
        </div>)
    } else { return (<p> no notes here! </p>) }
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default withRouter(connect(mapStateToProps, { deleteNote })(NoteOptions))
