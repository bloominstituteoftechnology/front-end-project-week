import React, { Component } from 'react';
import { editNote } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EditNotes extends Component {
  state = {
    title: this.props.notes.title,
    text: this.props.notes.text,
    id: this.props.id,
    fireRedirect: false
  };

  componentWillMount() {
    const noteToEdit = this.props.notes.find(
      each => each._id === this.props.id
    );
    this.setState({ title: noteToEdit.title, text: noteToEdit.text });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.editNote(this.state);
    this.setState({ fireRedirect: true });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/home" />;
    return (
      <div className="editNotes">
        <h4 className="title">Edit Note:</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            className="newTitle"
            type="text"
            name="title"
            placeholder="New Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            className="newContent"
            type="text"
            name="text"
            placeholder="New Content"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button className="save" type="submit">
            Update
          </button>
        </form>
        {this.state.fireRedirect && <Redirect to="/home" />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { editNote })(EditNotes);
