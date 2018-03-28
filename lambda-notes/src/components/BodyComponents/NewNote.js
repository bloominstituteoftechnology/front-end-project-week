import React, { Component, Fragment } from "react";
import { Form, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addNote } from "../../actions/newNote";
// import { withRouter } from "react-router-dom";

class NewNote extends Component {
  state = {
    note: {
      title: "",
      body: ""
    },
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
            className="ml-3 mb-3"
            size="40"
            type="text"
            placeholder="Enter a Title"
            value={this.state.note.title}
          />
          <textarea
            onChange={this.handleBodyChange}
            className="ml-3 d-block mb-2"
            rows="12"
            cols="60"
            type="text"
            placeholder="Enter a Note"
            value={this.state.note.body}
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
    const data = this.state.note.data;
    this.setState({ note: { title: event.target.value, data } });
  };

  handleBodyChange = event => {
    const title = this.state.note.title;
    this.setState({ note: { body: event.target.value, title } });
  };

  addNewNote = event => {
    event.preventDefault();
    console.log(this.state.note);
    // const postNewNote = {
    //   title: this.state.note.title,
    //   body: this.state.note.body
    // };
    this.props.addNote(this.state.note);

    this.setState({
      note: {
        title: "",
        body: ""
      },
      redirect: true
    });
  };
}

export default connect(null, { addNote })(NewNote);
