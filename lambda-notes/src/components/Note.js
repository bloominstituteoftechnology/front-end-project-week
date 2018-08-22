import React, { Component } from "react";
import axios from "axios";
import CreateNote from "./CreateNote";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import ReactMarkdown from 'react-markdown';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Note extends Component {
  constructor(props) {
    super(props);
    console.log("props", props)
    
    this.state = {
      note: [],
      id: 0,
      title: "",
      content: "",
      edit: false,
      deleted: false,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://mysterious-inlet-80205.herokuapp.com/notes/${id}`)
      .then(res => {
        this.setState({note: res.data[0]});
        console.log("res.data", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  editNote = () => {
    this.setState({ edit: true });
    const id = this.props.match.params.id;
    axios
      .get(`https://mysterious-inlet-80205.herokuapp.com/notes/${id}`)
      .then(res => {
        this.setState({note: res.data[0]});
        console.log("res.data", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNote = () => {
    axios
      .delete(`https://mysterious-inlet-80205.herokuapp.com/notes/${this.state.note.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ deleted: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("state", this.state)
    return this.state.deleted ? (
      <Redirect to="/notes" />
    ) : this.state.edit ? (
      <CreateNote
        edit={true}
        note={this.state.note}
        title={this.state.note.title}
        content={this.state.note.content}
      />
    ) : (
      <div key={this.props.match.params.id} className="note">
        <div className="editdeletebuttons">
          <a onClick={this.editNote}>edit</a>
          <a onClick={this.openModal}>delete</a>
        </div>
        <h3 className="notetitle">{this.state.note.title}</h3>
          <div className="notecontent">
          <ReactMarkdown source={this.state.note.content}/>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              Are you sure you want to delete this?
            </h2>
            <button onClick={this.deleteNote}>Delete</button>
            <button onClick={this.closeModal}>No</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Note;
