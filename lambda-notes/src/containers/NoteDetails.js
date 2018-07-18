import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNote, deleteNote, editNote } from '../actions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class NoteDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modal: false,
      editModal: false,
      isEditing: false,
      title: this.props.note.title,
      textBody: this.props.note.textBody
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  editToggle = () => {
    this.setState({
      editModal: !this.state.editModal,
      isEditing: true
    })
  }

  handleClick = () => {
    this.props.deleteNote(this.props.match.params.id)
    this.props.history.push('/')
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, textBody } = this.state
    const note = { title, textBody }
    this.props.editNote(this.props.match.params.id, note)
    this.setState({ title, textBody })
    this.editToggle()
  }

  handleEdit = () => {
    this.setState({ isEditing: true })
  }

  render () {
    const note = this.props.note
    console.log(note)
    return (
      <div className='noteDetails-container'>
        <div className='noteDetails'>
          <div className='noteDetails-btns'>
            <div className=''>
              <Button
                color='secondary'
                className='Btn-modal'
                onClick={this.editToggle}
              >
                Edit
              </Button>
              <Modal
                isOpen={this.state.editModal}
                toggle={this.editToggle}
                className='editModal'
              >
                <ModalHeader>Edit Note</ModalHeader>
                <ModalBody>
                  <form
                    onSubmit={this.handleSubmit}
                    className='editForm d-flex flex-column'
                  >
                    <input
                      className='edit-title'
                      type='text'
                      name='title'
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                    <textarea
                      className='edit-textBody'
                      type='text'
                      name='textBody'
                      value={this.state.textBody}
                      onChange={this.handleChange}
                    />
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color='primary' onClick={this.handleSubmit}>
                    Update Note
                  </Button>
                  <Button color='secondary' onClick={this.editToggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            {/* end of edit modal */}
            <div className='btn-modal'>
              <Button
                color='danger'
                className='noteDetail-button Btn-modal'
                onClick={this.toggle}
              >
                Delete
              </Button>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle}>Deleting Note</ModalHeader>
                <ModalBody>
                  Are You Sure You Want To Delete This Note ?
                </ModalBody>
                <ModalFooter>
                  <Button
                    color='danger'
                    onClick={(this.toggle, this.handleClick)}
                  >
                    Delete
                  </Button>{' '}
                  <Button color='primary' onClick={this.toggle}>
                    No
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            {/* end of delete modal */}
          </div>

          <h1 className='title-header'>{note.title}</h1>
          <p className='noteBody'>{note.textBody}</p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.note)
  return {
    note: state.note
  }
}
export default connect(mapStateToProps, { getNote, deleteNote, editNote })(
  NoteDetails
)
