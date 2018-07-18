import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import MarkdownRenderer from 'react-markdown-renderer';

class ViewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      editingNote: false,
      title: '',
      textBody: '',
      modal: false,
      tag: '',
      tags: []
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

/*Saves a note to the server*/
  saveNote = event => {
    const newNote = {title: this.state.title, textBody: this.state.content}
    event.preventDefault();
    axios.post('https://killer-notes.herokuapp.com/note/create', newNote)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log("Error is:", err);
    });
  }

  componentDidMount() {
    this.fetchNote(this.props.match.params.id);
  }

  componentWillReceiverProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchNote(newProps.match.params.id);
    }
  }

/*Will fetch just one note to be viewed upon clicking on a link to its route*/
  fetchNote = id => {
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      console.log(response.data);
      this.setState({note: response.data})
    })
    .catch(err => {
      console.log("Error:", err);
    })
  }

/*Allows for the deleting of notes*/
  deleteNote = id => {
    console.log(id);
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log("Delete response", response.data);
      this.props.setData();
      this.props.history.push("/")
    })
    .catch(err => {
      console.log("err", err);
    })
  }

/*Toggles the edit form for editing a note*/
  toggleEdit = () => {
    this.setState({
      editingNote: !this.state.editingNote,
      title: this.state.note.title,
      textBody: this.state.note.textBody
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

/*Saves the edits to the server and then redisplays the Note component*/
  handleEdit = (id) => {
    console.log("haha");
    const newEdits = {tags: this.state.tags, title: this.state.title, textBody: this.state.textBody}
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, newEdits)
    .then(response => {
      console.log(response.data);
      this.setState({note: response.data, editingNote: false});
      this.props.setData();
    })
    .catch(err => {
      console.log('Edit Error:', err);
    })
  }

/*Helper function used for Modal toggling in the delete functionality*/
  toggleModal = () => {
    this.setState({modal: !this.state.modal});
  }

  handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }


  render() {
    return (
    <div className="note-list">
      <div className="list-sidebar">
        <h1>Lambda Notes</h1>
        <NavLink to="/"><button className="sidebar-button">View Your Notes</button></NavLink>
        <NavLink to="/create"><button className="sidebar-button">+ Create New Note</button></NavLink>
        <button onClick={this.handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="right-bar">
        <div className="view-note-buttons">
        <button className="view-note-button" onClick={this.toggleEdit}>Edit</button>

        <button className="view-note-button" onClick={this.toggleModal}>Delete</button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalBody>
            <p>Are you sure you want to delete this note?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {this.deleteNote(this.props.match.params.id)}}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
        <h3 className="view-note-header">{this.state.note ? (this.state.editingNote ? <input name="title" className="title-input" value={this.state.title} onChange={this.handleChange}/>: this.state.note.title) : "Loading..."}</h3>
        <p className="view-note-body">{this.state.note ? (this.state.editingNote ? <textarea name="textBody" className="content-input" value={this.state.textBody} onChange={this.handleChange}></textarea> : <MarkdownRenderer markdown={this.state.note.textBody} />) : "Loading..."}</p>
        <div className="tagContainer">
        {this.state.note ? this.state.note.tags.map(tag => {
          return <span className="tagg">tag<span className="close"></span></span>
        }) : "Loading..."}
        <input type="text" placeholder="add tag" name="tag" onChange={this.handleChange} value={this.state.tag} />
        </div>
        {this.state.editingNote ? <button onClick={() => {this.handleEdit(this.props.match.params.id)}}>Save</button> : null}
      </div>
    </div>
  )
  }
}

export default ViewNote;
