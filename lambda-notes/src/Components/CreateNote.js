import React from "react";

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newText: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.saveNote(this.state.newTitle, this.state.newText);
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="newTitle"
          value={this.state.newTitle}
          onChange={this.inputHandler}
          placeholder="Note Title"
        />
        <textarea
          name="newText"
          value={this.state.newText}
          onChange={this.inputHandler}
          placeholder="Note Content"
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}