import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from '../REDUX/actions';

class ViewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    }
  }

  render() {
    const { note } = this.props.location.state.viewNote;
    return (
      <div className="PrimaryContainer__newNote"> 
        <div className="ViewNote__editOptions">
          <Link to={{ pathname: `/edit/${note.id}`, state: { note: note } }} className="ViewNote__editOptions--click">edit</Link>
          <Link to="/" onClick={() => this.props.deleteNote(note.id)} className="ViewNote__editOptions--click">delete</Link>
        </div>
        <h1 className="PrimaryContainer__header">{note.title}</h1>
        <div>{note.content}</div>
        <div>{note.id}</div>
      </div>
    )
  }
}

export default connect(null, { deleteNote })(ViewNote);
