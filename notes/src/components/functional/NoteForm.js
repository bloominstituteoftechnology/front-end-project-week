import React from "react";
import { connect } from "react-redux";

import { addNote, editNote } from "../../store/actions";

import { Form, Input, Textarea, Button } from "../style/noteFormStyle";

class NoteForm extends React.Component {
  state = {
    title: "",
    textBody: "",
    _id: null
  };

  filterProps = () => {
    this.props.notes.forEach(note => {
      if (this.props.match.params.id === note._id) {
        this.setState({ ...note });
        console.log(note);
      }
    });
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.filterProps();
    }, 5)
    
  }

  componentWillReceiveProps() {
    this.setState({ title: "", textBody: "" });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const pathName = this.props.match.url;
    pathName === "/noteform"
      ? this.props.addNote(this.state)
      : this.props.editNote(this.state);
    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  };

  render() {
    const pathName = this.props.match.url;
    return (
      <Form>
        <h2>{pathName === "/noteform" ? "Create New Note:" : "Edit Note:"}</h2>
        <Input
          name="title"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Textarea
          name="textBody"
          placeholder="Note Content"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
        <Button type="submit" onClick={this.handleClick}>
          {pathName === "/noteform" ? "Save" : "Upadate"}
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
