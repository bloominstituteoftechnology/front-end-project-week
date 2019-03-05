import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';

class NotesForm extends Component {
    state = {
        tags: "",
        _id: "",
        title: "",
        textBody: ""
    };

    handleInputChange = e => {
        this.setState({ [e.target._id]: e.target.value })
    }

    handleAddNote = () => {
        const { tags, _id, title, textBody } = this.state;
        this.props.createNote({ tags, _id, title, textBody });
        this.setState({ tags: "", _id: "", title: "", textBody: ""})
    };

    render() {
        return (
        <form>
            <input 
                className="input"
                value={this.state.tags}
                name="tags"
                type="text"
                placeholder="Tags"
                onChange={this.handleInputChange}
            />
            <input 
                className="input"
                value={this.state._id}
                name="id"
                type="text"
                placeholder="ID"
                onChange={this.handleInputChange}
            />
            <input
                className="input"
                value={this.state.title}
                name="title"
                type="text"
                placeholder="Title"
                onChange={this.handleInputChange}
            />
            <input
                className="input"
                value={this.state.textBody}
                name="textBody"
                type="text"
                placeholder="Content"
                onChange={this.handleInputChange}
            />
            <button onClick={() => this.handleAddNote()} type="button">
                Upload Note
            </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingNote: state.creatingNote
  };
};

export default connect(mapStateToProps, { createNote })(NotesForm);