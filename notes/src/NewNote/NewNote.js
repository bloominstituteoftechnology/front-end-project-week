import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../Redux/actions';
import LeftBar from '../LeftBar/LeftBar';
import './NewNote.css';

class NewNote extends Component {
  state = {
    title: '',
    body: '',
  };

  updateNote = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addNote = event => {
    event.preventDefault();

    this.props.addNote(this.state);

    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    return (
      <div className="container">
        <LeftBar />
        <div className="new-note_body">
          <div className="new-note_header">Create New Note:</div>
          <div className="new-note_fields">
            <form type="submit" onSubmit={this.addNote}>
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
              <div className="body-div">
                <textarea
                  type="text"
                  className="body-input"
                  placeholder="Note Content"
                  onChange={this.updateNote}
                  name="body"
                  value={this.state.body}
                />
              </div>
              <input type="submit" value="Save" className="submit-button" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addNote })(NewNote);
