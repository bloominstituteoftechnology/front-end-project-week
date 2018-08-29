import React from "react";
import { Page, PageHeader, NoteBody, ModeLink, ModeWrapper } from "./styles";
import Form from "./Form";
import { withRouter } from "react-router-dom";

class EditNote extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({
      title: this.state.title,
      body: this.state.body
    });
    this.setState({
      title: "",
      body: ""
    });
    this.props.history.push("/notes");
  };
  goBack = () => {
    return this.props.history.goBack();
  };

  render() {
    console.log("PROPS", this.props);
    const filteredNote = this.props.notes.filter(
      (note, index) => index == this.props.match.params.index
    );
    const currentNote = filteredNote[0];
    return (
      <div>
        <ModeWrapper cancel>
          <ModeLink onClick={this.goBack}>Cancel</ModeLink>
        </ModeWrapper>
        <PageHeader>Edit Note: {currentNote.title}</PageHeader>
        <Form
          body={this.state.body}
          title={this.state.title}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          label="Edit"
        />
      </div>
    );
  }
}

export default withRouter(EditNote);
