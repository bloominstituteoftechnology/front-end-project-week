import React, { Component } from 'react';
import { addNote } from '../actions';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

class CreateNewNote extends Component {
  state = {
    modal: false,
    newTitle: '',
    newText: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addNote = () => {
    console.log('addNote FIRED')
    this.props.addNote({
      title: this.state.newTitle,
      text: this.state.newText,
    })
    this.setState({
      modal: !this.state.modal,
      newTitle: '',
      newText: '',
    })
  }
  
  handleChange = (e) => {
    console.log(`setState to --> [${e.target.name}]: ${e.target.value}`)
      console.log('handleChange: e.target.value', e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  render() {
    return (
      <div>
        <button color="primary" onClick={this.toggle}>+ Create New Note</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <Input className="text-center" type="text" name="newTitle" id="title" placeholder="Title" onChange={this.handleChange}/>
            <Input className="text-center" type="textarea" name="newText" id="text" placeholder="Text" onChange={this.handleChange}/>
         </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addNote}>Add</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProp, { addNote })(CreateNewNote);