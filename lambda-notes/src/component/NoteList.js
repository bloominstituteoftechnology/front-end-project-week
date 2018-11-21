import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      modal: false,
      editing: false,
      editedText: ''
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.getNote(id);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log('response', response);
      })
      .catch(error => console.log(error));
  };
  deleteHandler = event => {
    event.preventDefault();
    this.deleteNote(this.state.note._id);
    this.props.history.push('/');
  };
  getNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(error => console.log(error));
  };
  render() {
    let viewStyle = {};
    let editStyle = {};
    if (this.state.editing) {
      viewStyle.display = 'none';
    } else {
      editStyle.display = 'none';
    }
    return (
      <div>
        <div style={viewStyle} onDoubleClick={this.editHandler}>
          <h2>{this.state.note.title}</h2>
          <p>{this.state.note.textBody}</p>
        </div>
        <input
          name="title"
          type="text"
          style={editStyle}
          onKeyDown={this.editSubmitHandler}
          onChange={this.ChangeHandler}
          value={this.state.editedText}
        />
        <input
          name="textBody"
          type="textarea"
          style={editStyle}
          onKeyDown={this.editSubmitHandler}
          onChange={this.ChangeHandler}
          value={this.state.editedText}
        />
        <div>
          <Button color="danger" onClick={this.toggle}>
            {this.props.buttonLabel}Delete
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalBody>Are you sure you want to delete this note?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.deleteHandler}>
                Delete
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
export default NoteView;
