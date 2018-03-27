import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Form, Button } from "reactstrap";
import { editNote } from "../../actions/editNote";
import { Redirect } from "react-router-dom";

class EditNote extends Component {
  state = {
    note: {
      title: "",
      body: "",
      id: ""
    },
    redirect: false
  };

  componentDidMount() {
    const item = this.props.notes.filter(
      item => Number(item.id) === Number(this.props.match.params.id)
    )[0];
    console.log(this.state.note);
    this.setState({
      note: {
        title: item.title,
        body: item.body,
        id: item.id
      }
    });
  }

  render() {
    // const note = this.props.notes.filter(
    //   item => Number(item.id) === Number(this.props.match.params.id)
    // )[0];

    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <Fragment>
        <h3 className="mt-5 ml-3">Create New Note:</h3>
        <Form onSubmit={this.updateNote} className="mr-5">
          <input
            onChange={this.handleTitleChange}
            className="ml-3 mb-5"
            size="40"
            type="text"
            placeholder="Enter a Title"
            value={this.state.note.title}
          />
          <textarea
            onChange={this.handleBodyChange}
            className="ml-3"
            rows="12"
            cols="80"
            type="text"
            placeholder="Enter a Note"
            value={this.state.note.body}
          />
          {/* <Link to="/"> */}
          <Button style={{ backgroundColor: "#2BC1C5" }} className="ml-3 mb-3">
            Update Note
          </Button>
          {/* </Link> */}
        </Form>
      </Fragment>
    );
  }

  updateNote = event => {
    event.preventDefault();
    console.log(this.state.note);
    this.props.editNote(this.state.note);
    this.setState({ redirect: true });
  };

  handleTitleChange = event => {
    const id = this.state.note.id;
    const body = this.state.note.body;
    this.setState({ note: { title: event.target.value, body, id } });
  };

  handleBodyChange = event => {
    const id = this.state.note.id;
    const title = this.state.note.title;
    this.setState({ note: { body: event.target.value, title, id } });
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { editNote })(EditNote);
