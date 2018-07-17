import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class ViewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      editingNote: false,
      title: '',
      textBody: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

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

  handleEdit = (id) => {
    console.log("haha");
    const newEdits = {title: this.state.title, textBody: this.state.textBody}
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


  render() {
    return (
    <div className="note-list">
      <div className="list-sidebar">
        <h1>Lambda Notes</h1>
        <NavLink to="/"><button className="sidebar-button">View Your Notes</button></NavLink>
        <NavLink to="/create"><button className="sidebar-button">+ Create New Note</button></NavLink>
      </div>
      <div className="right-bar">
        <button onClick={this.toggleEdit}>Edit      </button>
        <a href="#" onClick={() => {this.deleteNote(this.props.match.params.id)}}>Delete</a>
        <h3 className="note-list-header">{this.state.note ? (this.state.editingNote ? <input name="title" value={this.state.title} onChange={this.handleChange}/>: this.state.note.title) : "Loading..."}</h3>
        <p>{this.state.note ? (this.state.editingNote ? <input name="textBody" value={this.state.textBody} onChange={this.handleChange}/> : this.state.note.textBody) : "Loading..."}</p>
        {this.state.editingNote ? <button onClick={() => {this.handleEdit(this.props.match.params.id)}}>Save</button> : null}
      </div>
    </div>
  )
  }
}

export default ViewNote;
