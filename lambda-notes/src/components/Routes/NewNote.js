import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../actions/index";
import styled from "styled-components";

const NewForm = styled.div`
display: flex;
padding-left 500px;
width: 100%;
height: 500px;
background-color: #EEEEEE;`;

class NewNote extends Component {
  state = {
    title: "",
    textBody: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNote = e => {
    e.preventDefault();
    const addedNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    this.props.createNote(addedNote);
  };

  render() {
    console.log(this.state);
    return (
      <NewForm>
        <form onSubmit={e => this.handleAddNote(e)}>
          <h1>Create New Note:</h1>
          <input
            name='title'
            value={this.state.title}
            type='text'
            placeholder='Note Title'
            onChange={this.handleInputChange}
          />
          <br />
          <input
            name='textBody'
            value={this.state.textBody}
            type='text'
            placeholder='Note content'
            onChange={this.handleInputChange}
          />
          <br />
          <button type='submit'>Save</button>
        </form>
      </NewForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    createNote: state.createNote
  };
};

export default connect(
  mapStateToProps,
  { createNote }
)(NewNote);
