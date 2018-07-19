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
      tags: [],
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
      console.log("fetched Note", response.data);
      this.setState({note: response.data, tags: response.data.tags})
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
    const newEdits = {};
    if (this.state.tag.length > 0){
      newEdits.tags = this.state.note.tags;
      newEdits.tags.push(this.state.tag);
    }
    if (this.state.title.length > 0) newEdits.title = this.state.title;
    if (this.state.textBody.length > 0) newEdits.textBody = this.state.textBody;
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

/*Helper function that prevents page from reloading when editing tags*/
  handleTagSubmit = e => {
    e.preventDefault();
    this.handleTagEdit(this.props.match.params.id);
  }

/*Sends a put request to the server to edit the tag array*/
  handleTagEdit = id => {
    console.log("hte tags", this.state.tags);
    const newTags = {tags: this.state.tags}
    newTags.tags.push(this.state.tag);
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, newTags)
    .then(response => {
      console.log("axios response", response.data);
      this.setState({tags: response.data.tags, tag:''})
    })
    .catch(err => {
      console.log("Tag Edit Error", err);
    })
  }

/*Helper function used for Modal toggling in the delete functionality*/
  toggleModal = () => {
    this.setState({modal: !this.state.modal});
  }

/*Allows the user to logout of the app*/
  handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }

/*Deletes a tag from the view edit page*/
  deleteTag = (event) => {
    let newArray = this.state.tags.slice();
    newArray.splice(event.target.getAttribute('index'), 1);
    const newArrayObject = {tags: newArray}
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, newArrayObject)
    .then(response => {
      console.log("delete edit response", response.data);
      this.setState({tags: response.data.tags})
    })
    .catch(err => {
      console.log("Tag Edit Error", err);
    })
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
        {this.state.tags ? this.state.tags.map((tag, index) => {
          return <span key={Math.random()} className="tagg">{tag}<span className="close" index={index} onClick={this.deleteTag}></span></span>
        }) : "Loading..."}
        <form className="tagForm" onSubmit={this.handleTagSubmit}>
        <input className="mainInput" type="text" placeholder="add tag" name="tag" onChange={this.handleChange} value={this.state.tag} />
        </form>
        </div>
        {this.state.editingNote ? <button onClick={() => {this.handleEdit(this.props.match.params.id)}}>Save</button> : null}
      </div>
    </div>
  )
  }
}

export default ViewNote;
