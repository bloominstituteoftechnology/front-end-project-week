import React from "react";
import { PageHeader, ModeLink, ModeWrapper } from "./styles";
import Form from "./Form";
import { withRouter } from "react-router-dom";

class EditNote extends React.Component {
  state = {
    title: "",
		textBody: "",
  };

  componentDidMount() {
		this.setState({
			title: this.props.note.title,
			textBody: this.props.note.textBody,
		});
	}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({
      title: "",
      textBody: ""
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
          textBody={this.state.textBody}
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
