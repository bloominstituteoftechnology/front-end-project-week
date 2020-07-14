import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editNote } from "../../actions/index";
import styled from "styled-components";
import Fade from "react-reveal";

const EditForm = styled.div`
  display: flex;
  width: 100%;
`;

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      // content: ''
      textBody: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.notes.find(note => id === note._id.toString());
    // this.setState({ title: note.title, content: note.content })
    this.setState({ title: note.title, textBody: note.textBody });
    console.log(note);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditNote = e => {
    e.preventDefault();
    const editedNote = {
      title: this.state.title,
      // content: this.state.content
      textBody: this.state.textBody
    };
    this.props.editNote(editedNote, this.props.match.params.id);
  };

  render() {
    console.log(this.props);

    return (
      <Fade bottom>
        <EditForm>
          <form onSubmit={e => this.handleEditNote(e)}>
            <h1>Edit Note:</h1>
            <input
              name='title'
              value={this.state.title}
              type='text'
              onChange={this.handleInputChange}
            />
            <br />
            <input
              name='textBody'
              value={this.state.textBody}
              type='text'
              onChange={this.handleInputChange}
            />
            <br />
            <button type='submit'>Update</button>
          </form>
        </EditForm>
      </Fade>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes
  };
};

export default connect(
  mapStateToProps,
  { editNote }
)(EditNote);
