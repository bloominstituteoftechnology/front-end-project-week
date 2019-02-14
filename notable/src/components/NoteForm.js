import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addNote, updateNote } from "../actions/index";

const FormDiv = styled.div`
  h3 {
    font-size: 1.4rem;
    padding: 70px 25px 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  }

  input {
    margin-bottom: 20px;
  }

  #title {
    width: 60%;
    height: 43px;
    padding: 10px;
    font-size: 1.2rem;
  }

  #textBody {
    width: 80%;
    height: 480px;
    font-size: 1.2rem;
    padding: 10px;
  }

  button {
    width: 20%;
    margin: 20px 0px;
    font-size: 1.2rem;
    background-color: darkcyan;
    color: white;
  }
`;

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    if (this.props.updating) {
      this.setState({
        title: this.props.note.title,
        textBody: this.props.note.textBody
      });
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.props.updating) {
      this.props.updateNote({
        id: this.props.note.id,
        title: this.state.title,
        textBody: this.state.textBody
      });
      this.props.history.push(`/note/${this.props.note.id}`);
    } else {
      this.props.addNote({
        title: this.state.title,
        textBody: this.state.textBody
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <FormDiv>
        <h3>{this.props.purpose}</h3>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            placeholder="Note Title"
            onChange={this.changeHandler}
          />
          <textarea
            type="text"
            name="textBody"
            id="textBody"
            value={this.state.textBody}
            placeholder="Note Content"
            onChange={this.changeHandler}
          />
          <button type="submit">{this.props.buttonText}</button>
        </form>
      </FormDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.singleNote,
    updating: state.updating
  };
};

export default connect(
  mapStateToProps,
  { addNote, updateNote }
)(NoteForm);
