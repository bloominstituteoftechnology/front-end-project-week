import React, { Component } from 'react';
import { updateNote, getNote } from '../actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './NewNote.css';

class EditNote extends Component {
  state = {
    title: this.props.currentNote.title,
    body: this.props.currentNote.body,
    id: this.props.currentNote.id,
    redirect: false,
  };
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitEdit = () => {
    this.props.updateNote({
      title: this.state.title,
      body: this.state.body,
      id: this.props.currentNote.id,
    });
    this.setState({ redirect: true });
  };
  render() {
    return (
      <div className="form-group">
        <h3>Edit Note</h3>
        <form key={this.props.currentNote.id}>
          <input
            onChange={this.handleInput}
            className="form-control"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Note Title"
          />
          <textarea
            onChange={this.handleInput}
            className="form-control"
            type="text"
            name="body"
            value={this.state.body}
            placeholder="Content"
          />
          <button onClick={this.submitEdit} type="button" className="btn">
            Submit Edit
          </button>
        </form>
        {this.state.redirect && <Redirect to={'/'} />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
    currentNote: state.currentNote.reduce((obj, note) => {
      obj = note;
      return obj;
    }, {}),
    error: state.error,
  };
};
export default connect(mapStateToProps, { getNote, updateNote })(EditNote);
