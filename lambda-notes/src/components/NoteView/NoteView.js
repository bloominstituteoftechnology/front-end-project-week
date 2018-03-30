import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Modal, ModalBody, Button } from 'reactstrap';

import { deleteNoteAction } from '../../actions';
import { showWholeNote } from '../../actions';
import './NoteView.css';
import '../components.css';

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: '',
      isEditing: false,
      id: null,
    }
  }
  
  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    console.log(id);
    this.props.notes.forEach(note => {
      if (Number(id) === note.id) {
        console.log(note.title);
        this.setState({
          title: note.title,
          text: note.text,
          id: note.id,
          modal: false,
        });
      }
    });
    console.log(this.state);
  }
  
  goToViewMode = () => {
    this.props.history.go(-1);
  }
  
  delete = (id) => {
    // const youNoDelete = window.confirm('alert');
    // if (youNoDelete) {
    // }
    this.props.deleteNoteAction(id);
    this.goToViewMode();
  }
  
  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }
  
  toggleModal = () => {
    this.setState({ modal: !this.state.modal })
  }
  
  
  editNote = event => {
    event.preventDefault();
  }
  
  updateNote = event => {
    
    if (event.target.name === 'title') {
      this.setState({
        title: event.target.value
      })
    } else if (event.target.name === 'text') {
      this.setState({
        text: event.target.value
      })
    }
  }
  
  
  
  render() {
    if (this.state.isEditing) {
      return (
        <div className="mainContainer">

          <div className="container">
            <div className="leftSide">
              <div className='h1'>Lambda<br/>Notes</div>
              <Link to={`/`}>
                <button className="buttons">View Your Notes</button>
              </Link>
              <Link to={`/create`}>
                <button className="buttons">+ Create New Note</button>
              </Link>
            </div>

            <div className="rightSide">
              <br/>
              <div className="noteViewTitle">Edit Note</div>
              <br/>
              <Form className="form" onSubmit={this.editNote}>
                <FormGroup>
                  <Input className="titleInput"
                    name='title'
                    onChange={this.updateNote}
                    value={this.state.title}
                  />
                </FormGroup>
                <br/>
                <FormGroup>
                  <Input className="textInput"
                    type="textarea"
                    name='text'
                    onChange={this.updateNote}
                    value={this.state.text}
                  />
                </FormGroup>

                <br/>
                <button className='updateButton' type="submit" onClick={this.toggleEdit}>Update note</button>
              </Form>
            </div>
          </div>

        </div>
      )
    } else {
      return (
        <div className="mainContainer">

          <div className="container">
            <div className="leftSide">
              <div className='h1'>Lambda<br/>Notes</div>
              <Link to={`/`}>
                <button className="buttons">View Your Notes</button>
              </Link>
              <Link to={`/create`}>
                <button className="buttons">+ Create New Note</button>
              </Link>
            </div>

            <div className="rightSide">

              <div className="editDelete">
                <div onClick={this.toggleEdit}>Edit</div>

                <div onClick={this.toggleModal}>Delete</div>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggleModal} className="popUp">
                  <ModalBody className="modalBody">
                    Are you sure you want to delete this?
                    <br/>
                    <br/>
                    <Button color="danger" onClick={() => this.delete(this.state.id)} className="popButton">Delete</Button>
                    <Button color="info" onClick={this.toggleModal} className="popButton">No</Button>
                  </ModalBody>
                </Modal>


                {/* <div onClick={() => this.delete(this.state.id)}>Delete</div> */}
              </div>

              <br/>
              <div className="noteViewTitle">{this.state.title}</div>
              <br/>
              <div className="textArea">{this.state.text}</div>
            </div>
          </div>

        </div>
      )
    }
  }
}


const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { showWholeNote, deleteNoteAction })(NoteView);