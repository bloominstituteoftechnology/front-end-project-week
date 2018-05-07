import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './UpdateNote.css'

class UpdateNote extends Component {
  handleUpdate(event) {
    event.preventDefault()
    this.props.updateNote(this.props.note)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="UpdateNote">
        <form className="update-form" onSubmit={this.handleUpdate.bind(this)}>
          <label className="input-label">
            <h2 className="label-h2">Edit Note:</h2>
          </label>
          <input
            required
            className="input-title"
            type="text"
            placeholder="Note Title"
            value={this.props.title || this.props.note.title}
            onChange={this.props.newTitle}
          />
          <textarea
            required
            className="input-body"
            type="text"
            placeholder="Note Content"
            value={this.props.content || this.props.note.content}
            onChange={this.props.newContent}
          />
          <button className="sav-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(UpdateNote)
