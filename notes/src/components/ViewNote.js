import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class ViewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
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
      console.log('booty', response.data);
      this.setState({note: response.data})
    })
    .catch(err => {
      console.log("Error:", err);
    })
  }


  render() {
    console.log("State", this.state);
    console.log("Note", this.state.note);
    return (
    <div className="note-list">
      <div className="list-sidebar">
        <h1>Lambda Notes</h1>
        <NavLink to="/"><button className="sidebar-button">View Your Notes</button></NavLink>
        <NavLink to="/create"><button className="sidebar-button">+ Create New Note</button></NavLink>
      </div>
      <div className="right-bar">
        <p>Edit</p>
        <p>Delete</p>
        <h3 className="note-list-header">{this.state.note ? this.state.note.title : "Loading..."}</h3>
        <p>{this.state.note ? this.state.note.textBody : "Loading..."}</p>
      </div>
    </div>
  )
  }
}

export default ViewNote;
