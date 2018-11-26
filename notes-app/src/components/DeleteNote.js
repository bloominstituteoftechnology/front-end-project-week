import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeleteNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteModal: true
    }
  }

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        this.setState({
          deleteModal: false
        })
      })
      .catch(err => console.log(err))
    this.deleteModal()
  }

  deleteModal() {
    this.setState({
      deleteModal: false
    })
    setTimeout(() => this.props.history.go(-2), 1000)
  }

  render() {
    const DeleteNote =
      this.state.deleteModal === true ? (
        <div className="delete-modal-box">
          <p>Are you sure you want to delete this?</p>
          <button
            className="delete-button"
            onClick={() => this.deleteNote(this.props.match.params.id)}
          >
            Delete
          </button>
          <Link to={`/notes/${this.props.match.params.id}`}>
            <button
              className="cancel-delete"
              onClick={() => this.deleteModal()}
            >
              No
            </button>
          </Link>
        </div>
      ) : null
    return <React.Fragment>{DeleteNote}</React.Fragment>
  }
}

export default DeleteNote
