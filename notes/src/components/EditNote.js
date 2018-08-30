import React from "react";
import { PageHeader, ModeLink, ModeWrapper } from "./styles";
import Form from "./Form";
import { withRouter } from "react-router-dom";

class EditNote extends React.Component {
  state = {
    title: this.props.handleCurrentNote().title,
    body: this.props.handleCurrentNote().body
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
    return (
      <div>
        <ModeWrapper cancel>
          <ModeLink onClick={this.goBack}>Cancel</ModeLink>
        </ModeWrapper>
        <PageHeader singleNote singleNoteEdit>
          Edit Note: {this.state.title}
        </PageHeader>
        <Form
          body={this.state.body}
          title={this.state.title}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          label="Save"
        />
      </div>
    );
  }
}

export default withRouter(EditNote);
