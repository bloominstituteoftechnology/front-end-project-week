import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote, editNote, getNote, postNote } from '../actions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class NoteDetails extends Component {
  constructor (props) {
    super(props)
    this.props.getNote(this.props.match.params.id)
    this.state = {
      modal: false,
      editModal: false,
      isEditing: false,
      note: this.props.note,
      title: this.props.note.title,
      context: this.props.note.context,
      tags: this.props.note.tags
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ note: nextProps.note })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  editToggle = () => {
    this.setState({
      editModal: !this.state.editModal
    })
  }

  handleClick = () => {
    this.props.deleteNote(this.props.match.params.id)
    this.props.history.push('/')
  }

  handleChange = (e) => {
    console.log('inhere', e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, context, tags } = this.state
    const note = { title, context, tags }
    this.props.editNote(this.props.match.params.id, note)
    this.setState({ title, context, tags })
    this.editToggle()
  }

  handleEdit = () => {
    this.setState({ isEditing: true })
  }
  handleUpdate = () => {
    this.setState({ title: this.props.note.title })
  }
  handleClone = (e) => {
    e.preventDefault()
    const { title, context, tags } = this.state
    const note = { title, context, tags }
    const token = localStorage.getItem('token')
    this.props.postNote(note, token)
    this.setState({ title, context, tags })
  }

  render () {
    if (!this.state.note || !this.props.note) {
      return <div>Loading...</div>
    }
    const tags = this.props.note.tags
    if (!tags) {
      return <div>Loading...</div>
    }

    console.log('tags', tags)
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
                    <label style={{ fontWeight: 'bold' }}>Title:</label>
                    <input
                      className='edit-title'
                      type='text'
                      name='title'
                      value={this.state.title}
                      onChange={this.handleChange}
                      style={{ padding: '10px' }}
                    />
                    <label style={{ fontWeight: 'bold' }}>
                      Add Tags: <i className='fas fa-tag' />
                    </label>
                    <input
                      style={{ padding: '10px' }}
                      className='edit-title'
                      type='text'
                      name='tags'
                      value={this.state.tags}
                      onChange={this.handleChange}
                    />
                    <label style={{ fontWeight: 'bold' }}>Note:</label>
                    <textarea
                      style={{ padding: '10px' }}
                      className='edit-context'
                      type='text'
                      name='context'
                      value={this.state.context}
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
                <ModalHeader toggle={this.toggle}>
                  Deleting Note <i className='fas fa-trash-alt' />
                </ModalHeader>
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
            <div className='clone-btn' onClick={this.handleClone}>
              Duplicate
            </div>
          </div>
          <div onClick={this.editToggle} className='detail-div'>
            <h1 className='title-header'>{this.props.note.title}</h1>
            <p className='noteBody'>{this.props.note.context}</p>
            {tags.map((tag, index) => {
              return (
                <div className='fas fa-tags' key={tag + index}>
                  {tag}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ note }) => {
  return {
    note
  }
}
export default connect(mapStateToProps, {
  deleteNote,
  editNote,
  getNote,
  postNote
})(NoteDetails)
