import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchNotes, editNote } from "../../actions/noteActions";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5% 1% 0 10%;
`;
const Input = styled.input`
  border: 1px solid #333;
  padding: 10px;
  width: 400px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  border: 1px solid #333;
  outline: none;
  font-size: 20px;
  padding: 10px;
  width: 700px;
  height: 400px;
`;
const Button = styled.button`
  background: #00cec9;
  border: 1px solid rgb(167, 167, 167);
  padding: 15px;
  margin-top: 10px;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
`;

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const { notes, match } = this.props;
    const note = notes.find(note => match.params.id === `${note.id}`);
    this.setState(note);
  }

  noteEdited = e => {
    const { notes, match } = this.props;
    const note = notes.find(note => match.params.id === `${note.id}`);
    e.preventDefault();
    this.props.editNote(this.state);
    this.props.history.push(`/note/${note.id}`);
  };

  render() {
    return (
      <Form onSubmit={this.noteEdited}>
        <h1>Edit Note:</h1>

        <Input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Title"
          onChange={this.handleChange}
        />
        <TextArea
          name="textBody"
          value={this.state.textBody}
          id="note.id"
          cols="60"
          rows="30"
          onChange={this.handleChange}
          placeholder="Note Content"
        />
        <Button type="submit" value="Save">
          Save
        </Button>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes
  };
};
export default connect(
  mapStateToProps,
  { fetchNotes, editNote: editNote }
)(EditNote);
