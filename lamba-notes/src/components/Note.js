import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

let APIUrl = 'https://bummingsnotes.herokuapp.com';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      editTitle: '',
      editBody: '',
      open: false // modal closed by default
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`${APIUrl}/api/notes/${id}`)
      .then(response => {
        this.setState({
          note: response.data,
          editTitle: response.data[0].title,
          editBody: response.data[0].content,
          editId: response.data[0].id
        });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get(`${APIUrl}/api/notes`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onOpenModal = () => {
    this.setState({ open: true });
    console.log('modal opened');
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className='singleNote'>
        <div className='note__options'>
          <Link
            className='singleNote__edit'
            to={`/note/edit/${this.state.editId}`}
          >
            edit
          </Link>
          <span
            className='singleNote__delete'
            onClick={() => {
              this.onOpenModal();
              this.props.deleteNote(this.state.editId);
            }}
          >
            delete
          </span>
          <Modal open={this.state.open} onClose={this.onCloseModal} center>
            <h2>Note had been deleted</h2>
          </Modal>
        </div>

        <h1 className='singleNote__headline'>{this.state.editTitle}</h1>
        <p className='singleNote__content'>{this.state.editBody}</p>
      </div>
    );
  }
}

export default Note;
