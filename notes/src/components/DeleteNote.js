import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteNote } from '../actions'

class DeleteNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  handleHide = e => {
    e.preventDefault()
    this.setState({ show: false })
    this.props.history.push(`/view/${this.props.match.params.id}`)
  }

  handleDelete = e => {
    e.preventDefault()
    this.props.deleteNote(
      this.props.notes[this.props.match.params.id]._id,
      this.props.match.params.id
    )
    this.setState({ show: false })
    this.props.history.push('/view')
  }

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.handleHide}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Delete Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={this.handleDelete}>
            Yes
          </Button>
          <Button onClick={this.handleHide}>No</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = ({ notes }) => ({ notes })

export default withRouter(connect(mapStateToProps, { deleteNote })(DeleteNote))
