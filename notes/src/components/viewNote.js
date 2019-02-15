import React, { Component } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'

class ViewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      id: '',
      modal: false
    }
  }
  componentDidMount() {
    const { notes, match } = this.props
    const note = notes.find(note => note._id === String(match.params.id))
    console.log(note, "note")
    console.log(match.params.id, "params")
    console.log(notes, "notes")
    this.setState({
      title: note.title,
      text: note.textBody,
      id: note._id,
    })
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
    console.log(this.state.modal, "ModalState")
  }

  submitHandler = (e) => {
    e.preventDefault()
    const id = this.state.id;
    this.props.history.push(`/update/${id}`)
  }

  deleteHandler = () => {
    const id = this.state.id;
    this.props.deleteNote(id)
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="viewNote">
        <div className="links">
          <h3 onClick={this.submitHandler} >edit</h3>
          <h3 onClick={this.toggle}>delete</h3>
        </div>
        <h1>{this.state.title}</h1>
        <p>{this.state.text}</p>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody className="deleteModal">
            <h1>Are You Sure You Want To Delete This Note?</h1>
            <div className="buttonsModal">
              <Button onClick={this.deleteHandler} color="danger">Yes</Button>
              <Button onClick={this.toggle} color="primary">No</Button>
            </div>
          </ModalBody>
        </Modal>

      </div>
    )
  }
}


export default ViewNote
