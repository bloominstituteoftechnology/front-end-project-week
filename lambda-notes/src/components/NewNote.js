import React, { Component } from 'react';
import { addNote } from '../actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './NewNote.css';

class NewNote extends Component {
  state = {
    title: '',
    body: '',
    id: '',
    redirect: false,
    disabled: true,
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDisable = () => {
    const { title, body } = this.state;
    let val = title === '' || body === '';
    this.setState({
      disabled: val,
    });
    return val;
  };
  submitNote = e => {
    e.preventDefault();
    if (!this.handleDisable()) {
      this.props.addNote({
        title: this.state.title,
        body: this.state.body,
        id: this.state.id.length + 1,
      });
      this.setState({
        note: {
          title: '',
          body: '',
          id: '',
        },
        redirect: true,
      });
    }
  };
  render() {
    return (
      <div className="form-group">
        <h3>Create New Note</h3>
        <form>
          <input
            onChange={this.handleInput}
            className="form-control"
            type="text"
            name="title"
            onKeyUp={this.handleDisable}
            value={this.state.title}
            placeholder="Note Title"
          />
          <textarea
            onChange={this.handleInput}
            className="form-control"
            type="text"
            name="body"
            onKeyUp={this.handleDisable}
            value={this.state.body}
            placeholder="Content"
          />
          <button
            onClick={this.submitNote}
            type="button"
            className={this.state.disabled ? 'btn disabled' : 'btn'}
          >
            Add note
          </button>
        </form>
        {this.state.redirect && <Redirect to={'/'} />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    addingNote: state.addingNote,
    notes: state.notes,
    error: state.error,
  };
};

export default connect(mapStateToProps, { addNote })(NewNote);
