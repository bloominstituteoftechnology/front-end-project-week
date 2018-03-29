import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap'
import './ViewNote.css';

  
class ViewNote extends Component {
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteNote(event);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="ViewNote">
        <div className="note-form">
          <Link className="note-update" to={`/update/${this.props.note.id}`}>Update</Link>
          <button className="note-delete" onClick={this.handleDelete.bind(this)}  value={this.props.note.id}>Delete</button>
        </div>
        <h2 className="note-title">{this.props.note.title}</h2>
        <p className="note-content">{this.props.note.content}</p>
      </div>
    );
  }
}

export default withRouter(ViewNote);