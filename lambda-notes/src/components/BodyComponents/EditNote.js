import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Form, Button } from "reactstrap";
import { editNote } from "../../actions/editNote";

class EditNote extends Component {
  state = {
    title: "",
    body: "",
    id: ""
  };

  componentDidMount(props) {
    const note = this.props.notes.filter(
      item => Number(item.id) === Number(this.props.match.params.id)
    )[0];
    this.setState({
      title: note.title,
      body: note.body,
      id: note.id
    });
  }

  render() {
    const note = this.props.notes.filter(
      item => Number(item.id) === Number(this.props.match.params.id)
    )[0];
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
            value={this.state.title}
          />
          <textarea
            onChange={this.handleBodyChange}
            className="ml-3"
            rows="12"
            cols="80"
            type="text"
            placeholder="Enter a Note"
            value={this.state.body}
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
    this.props.editNote(this.state);
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { editNote })(EditNote);
