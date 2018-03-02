import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
  state = {
    title: '',
    content: '',
    id: '',
  }

  componentDidMount() {
    this.setState({...this.props.currentNote});
  }

  render() {
    return (
      <div className="edit-note">
        <div className="edit-note-header">
          <h2>Edit Note:</h2>
        </div>
        <form onSubmit={this.modNote}>
          <div className="edit-note-title">
            <input
            className="edit-note-title-input"
            type="text"
            label="Title"
            placeholder="Note Title"
            onChange={this.handleChange}
            value={this.state.title}
            />
          </div>
          <div className="edit-note-content">
            <textarea
            className="edit-note-content-input"
            type="text"
            label="Content"
            placeholder="Note Content"
            onChange={this.handleChange}
            value={this.state.content}
            />
          </div>
          <button type="submit">Update</button>
          {/* <button><Link to='/list'>Update</Link></button> */}
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  modNote = (event) => {
    event.preventDefault();
    const newNote = Object.assign({}, this.state);
    this.setState({
      title: '',
      content: '',
      id: '',
    });
    this.props.submitModifiedNote(newNote);
    this.props.changeSwitch(`${newNote.title}`, 'noteView');
  }
}

export default EditNote;