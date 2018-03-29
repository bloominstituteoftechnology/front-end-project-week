import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addNote, updateNote } from "../actions";
import { Button, Input } from "reactstrap";

const StyledEditForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: lavender;
  width: 70%;

  .title {
    height: 40px;
    width: 60%;
    margin-top: 20px;
    margin-left: 6.5%;
    margin-bottom: 10px;
    padding: 5px;
  }

  .text {
    width: 90%;
    height: 300px;
    margin-left: 6.5%;
    padding: 5px;
  }

  .save-button {
    background: #2bc1c4;
    margin-left: 6.5%;
    width: 150px;
  }
`;

class EditForm extends React.Component {
  state = {
    title: this.props.notes.find(
      note => note.id === Number(this.props.id)
    ).title,
    text: this.props.notes.find(
      note => note.id === Number(this.props.id)
    ).text,
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("updateNote FIRED");
    console.log(typeof this.props.id);
    this.props.updateNote({
      title: this.state.title,
      text: this.state.text,
      id: this.props.id
    });
    this.setState({
      title: "",
      text: "",
      redirect: true
    });
  };

  handleChange = e => {
    console.log(`setState to --> [${e.target.name}]: ${e.target.value}`);
    console.log("handleChange: e.target.value", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log("EditForm this.props", this.props);
    return (
      <StyledEditForm>
        <form>
          <input
            required
            className="title"
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
            maxLength="30"
          />
          <textarea
            required
            className="text"
            type="text"
            name="text"
            placeholder="Text"
            onChange={this.handleChange}
            value={this.state.text}
            maxLength="250"
          />
          <button className="save-button" onClick={this.handleSubmit}>Save</button>
          {this.state.redirect ? (
            <Redirect to={`/single-note-view/${this.props.id}`} />
          ) : null}
        </form>
      </StyledEditForm>
    );
  }
}

const mapStateToProp = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProp, { addNote, updateNote })(EditForm);
