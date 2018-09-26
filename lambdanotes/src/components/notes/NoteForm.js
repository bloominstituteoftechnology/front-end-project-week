import React, { Component } from 'react';
import { addNote } from '../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

class NoteForm extends Component {
  state = {
    tags: '',
    title: '',
    textBody: ''
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      tags: '',
      title: '',
      textBody: ''
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.tags}
          name="tags"
          onChange={this.changeHandler}
          required
        />
        <input
          type="text"
          value={this.state.title}
          name="title"
          onChange={this.changeHandler}
          required
        />
        <input
          type="text"
          value={this.state.textBody}
          name="textBody"
          onChange={this.changeHandler}
          required
        />
        <input type="submit" value="Add New Note" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  null,
  { addNote }
)(NoteForm);
