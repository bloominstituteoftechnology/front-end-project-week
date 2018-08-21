import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      content:'',
      tag: '',
      tags: []
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
      console.log(response);
      this.props.setData();
      this.props.history.push("/")
    })
    .catch(err => {
      console.log("Error is:", err);
    });
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
        <h3 className="note-list-header">Create New Note: </h3>
        <form className="testing-form" onSubmit={this.saveNote}>
        <input className="title-input" name="title" placeholder="note title" value={this.state.title} onChange={this.handleChange}/>
        <br/>
        <textarea name="content" className="content-input" placeholder="Note Content" value={this.state.content} onChange={this.handleChange}></textarea>
        <br/>
        <button className="sidebar-button save-create" type="submit">Save</button>
        </form>
      </div>
    </div>
  )
  }
}

export default CreateNote;
