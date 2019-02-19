import React, {Component} from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import {fetchNotes, addNote} from '../../actions/noteActions'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5% 1% 0 10%;
`;
const Input = styled.input`
  boreder: 1px solid #333;
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
  width: 600px;
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

class NoteForm extends Component {

  constructor(props)
  { super(props)
    this.state = {
      title: '',
      textBody: ''

    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createNote = e => {
    e.preventDefault()
    this.props.addNote(this.state)
    this.props.history.push("/");
  }

  componentDidMount() {
    this.refs.textArea.focus();
  }

  render() {
    return (
      <Form>
        <h1>Create New Note</h1>
        <Input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.handleChange} />
        <TextArea
          ref='textArea'
          name="textBody"
          value={this.state.textBody}
          id="props.id"
          cols="60"
          rows="30"
          onChange={this.handleChange}
          placeholder="Note Content"
          data-gramm_editor="false"
        />
        <Button onClick={this.createNote}>Save</Button>
      </Form>
    );
  }
}

const mapStateToProps = () => {
  return{}
}

export default connect(mapStateToProps, {fetchNotes, addNote: addNote})(NoteForm);
