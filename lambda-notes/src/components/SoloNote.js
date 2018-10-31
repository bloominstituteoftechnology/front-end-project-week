import React from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { deleteNote, editNote } from "../actions";
import Form from "./Form";

const NoteBox = styled.div`
  box-sizing: border-box;
  margin: 23px 14px 0 0;
  padding: 12px 15px 28px;
  position: relative;
  width: 100%;
  word-wrap: break-word;
  max-width: 750px;
  h5 {
    font-size: 24px;
    font-weight: bold;
    word-wrap: break-word;
    padding-bottom: 10px;
  }
  p {
    margin: 10px 0 20px;
    line-height: 2;
    word-wrap: break-word;
    font-size: 14px;
    overflow: hidden;
    padding-bottom: 10px;
  }
  .note-control {
    position: absolute;
    top: -30px;
    right: 5px;
    display: flex;
    p {
      text-decoration: underline;
      font-size: 14px;
      margin: 0 5px;
      cursor: pointer;
    }
  }
`;

class SoloNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      tags: [],
      formView: false
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.id}`)
      .then(({ data }) => this.setState({ ...data }))
      .catch(err => console.log(err));
  };

  deleteHandler = () => {
    this.props.deleteNote(this.props.id);
    this.props.history.push("/");
  };

  toggleForm = () => {
    this.setState({ formView: !this.state.formView });
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let edited = {
      title: this.state.title,
      textBody: this.state.textBody,
      tags: this.state.tags
    };
    this.props.editNote(this.props.id, edited);
    this.toggleForm();
  };

  render() {
    console.log(this.state);
    if (this.state.message || this.state.errorMessage) {
      this.props.history.push("/");
    }
    return (
      <NoteBox>
        <div className={this.state.title ? "none" : ""}>
          <h3>Fetching Note</h3>
        </div>
        <div className={this.state.formView ? "none" : ""}>
          <h5>{this.state.title}</h5>
          <p>{this.state.textBody}</p>
        </div>
        <div className="note-control">
          <p onClick={this.toggleForm}>edit</p>
          <p onClick={this.deleteHandler}>delete</p>
        </div>
        <div className={this.state.formView ? "" : "none"}>
          <Form
            state={this.state}
            submitHandler={this.submitHandler}
            changeHandler={this.changeHandler}
          />
        </div>
      </NoteBox>
    );
  }
}

export default connect(
  null,
  { deleteNote, editNote }
)(SoloNote);
