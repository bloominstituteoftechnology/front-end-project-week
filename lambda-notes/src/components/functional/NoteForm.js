import React from "react";
import { connect } from "react-redux";
import { addNote, editNote } from "../../actions";
import { Form, Input, TextField, Button } from "../styling/NoteFormStyling";

class NoteForm extends React.Component {
  state = {
    title: "",
    textBody: "",
    _id: null
  };

  matchRespectiveNote = () => {
    this.props.notes.forEach(note => {
      if (this.props.match.params.id === note._id) {
        this.setState({ ...note });
      }
    });
  };

  componentDidMount() {
    this.matchRespectiveNote();
  }

  componentWillReceiveProps() {
    this.setState({ title: "", textBody: "" });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const urlPath = this.props.match.url;
    urlPath === "/noteform"
      ? this.props.addNote(this.state)
      : this.props.editNote(this.state);
    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  };

  render() {
    const urlPath = this.props.match.url;
    return (

      <Form>
        <h2>{urlPath === "/noteform" ? "Create New Note:" : "Edit Note:"}</h2>
        <Input
          name="title"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <TextField
          name="textBody"
          placeholder="Note Content"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
        <Button type="submit" onClick={this.handleSubmit}>
          {urlPath === "/noteform" ? "Save" : "Update"}
        </Button>
      </Form>

    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { addNote, editNote }
)(NoteForm);