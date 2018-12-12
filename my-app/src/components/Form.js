import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      tags: [],
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    console.log("form props are", this.props);
    if (this.props.note) {
      this.setState({
        id: this.props.note.id,
        tags: this.props.note.tags,
        title: this.props.note.title,
        content: this.props.note.content
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const note = {
      ...this.state
    };
    if (this.props.note) {
      this.props.submit(note);
      this.props.history.push(`/${this.props.match.params.id}`);
    } else {
      console.log("what are you submitting?", note);
      this.props.submit(note);
      this.props.history.goBack();
    }
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{this.props.note ? "Edit Note:" : "Create New Note:"}</h3>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
          placeholder="Note Title"
        />
        <textarea
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleInput}
          placeholder="Note Content"
        />
        <button type="submit" className="button form-button">
          {this.props.note ? "Update" : "Save"}
        </button>
      </form>
    );
  }
}
export default Form;
