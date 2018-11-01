import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNote } from "../actions";
import {
  PageTitle,
  StyledInput,
  StyledTextArea,
  SubmitInput
} from "../styles/SharedStyles";

class EditNote extends Component {
  state = {
    tags: [],
    title: "",
    textBody: ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();

    this.props.updateNote(this.props.note._id, {
      title: this.state.title,
      textBody: this.state.textBody
    });

    this.props.returnToNote("edit");
  };

  componentDidMount() {
    this.setState({
      title: this.props.note.title,
      textBody: this.props.note.textBody
    });
  }

  render() {
    console.log(this.props);
    return (
      <form className="EditNote" onSubmit={this.submitHandler}>
        <PageTitle>Edit Note:</PageTitle>
        <StyledInput
          name="title"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.changeHandler}
          required
        />
        <StyledTextArea
          name="textBody"
          type="text"
          placeholder="Note Content"
          value={this.state.textBody}
          onChange={this.changeHandler}
          required
        />
        <SubmitInput type="submit" value="Update" />
      </form>
    );
  }
}

export default connect(
  null,
  { updateNote }
)(EditNote);
