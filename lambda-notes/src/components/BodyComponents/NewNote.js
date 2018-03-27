import React, { Component, Fragment } from "react";
import { Form, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addNote } from "../../actions/newNote";
// import { withRouter } from "react-router-dom";

class NewNote extends Component {
  state = {
    title: "",
    body: "",
    redirect: false
  };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <Fragment>
        <h3 className="mt-5 ml-3">Create New Note:</h3>
        <Form onSubmit={this.addNewNote} className="mr-5">
          <input
            required
            onChange={this.handleTitleChange}
            className="ml-3 mb-5"
            size="40"
            type="text"
            placeholder="Enter a Title"
            value={this.state.title}
          />
          <textarea
            onChange={this.handleBodyChange}
            className="ml-3 d-block mb-2"
            rows="12"
            cols="80"
            type="text"
            placeholder="Enter a Note"
            value={this.state.body}
          />
          {/* <Link to="/"> */}
          <Button style={{ backgroundColor: "#2BC1C5" }} className="ml-3 mb-3">
            Add Note
          </Button>
          {/* </Link> */}
        </Form>
      </Fragment>
    );
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };

  addNewNote = event => {
    event.preventDefault();
    const postNewNote = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.addNote(postNewNote);

    this.setState({
      title: "",
      body: "",
      redirect: true
    });
  };
}

export default connect(null, { addNote })(NewNote);
