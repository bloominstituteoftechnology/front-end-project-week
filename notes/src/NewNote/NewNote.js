import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNote } from '../Redux/actions';
import LeftBar from '../LeftBar/LeftBar';
import './NewNote.css';

class NewNote extends Component {
  state = {
    title: '',
    content: '',
  };

  updateNote = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addNote = event => {
    const completedNote = {
      title: this.state.title,
      content: this.state.content,
    };

    this.props.addNote(completedNote);

    this.setState({
      title: '',
      content: '',
    });
  };

  render() {
    return (
      <div className="container">
        <LeftBar />
        <div className="new-note_content">
          <div className="new-note_header">Create New Note:</div>
          <div className="new-note_fields">
            <form type="submit">
              <div className="title-div">
                <input
                  type="text"
                  className="title-input"
                  placeholder="Note Title"
                  onChange={this.updateNote}
                  name="title"
                  value={this.state.title}
                />
              </div>
              <div className="content-div">
                <textarea
                  type="text"
                  className="content-input"
                  placeholder="Note Content"
                  onChange={this.updateNote}
                  name="content"
                  value={this.state.content}
                />
              </div>
              <Link to="/" onClick={this.addNote}>
                <input type="submit" value="Save" className="submit-button" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addNote })(NewNote);
