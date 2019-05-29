import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, fetchData } from '../actions';

class NotesForm extends Component {
  state = {
    title: '',
    content: ''
  };

  handleTodoInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodoHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNote(this.state);
    this.props.fetchData();
    this.props.history.push('/');
  };

  render() {
    return (
      <form className="Column-Layout">
        <h1>Create New Note:</h1>
        <input
          className="input-title"
          value={this.state.title}
          name="title"
          type="text"
          placeholder="Note Title"
          onChange={this.handleTodoInput}
        />
        <input
          className="input-body"
          value={this.state.Content}
          name="Content"
          type="text"
          placeholder="Note Content"
          onChange={this.handleTodoInput}
        />
        <h3 onClick={this.addTodoHandler}>Save</h3>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  {
    addNote,
    fetchData
  }
)(NotesForm);
