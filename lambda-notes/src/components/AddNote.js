import React from "react";

class AddNote extends React.Component {
  submitHandler = event => {
    event.preventDefault();
    this.props.addNote(this.props.state);
    this.props.history.push("/");
  };

  render() {
    const makeInput = (name, type = "text", className = "input-section") => (
      <textarea
        autoComplete="off"
        className={className}
        type={type}
        name={name}
        placeholder={name[0].toUpperCase() + name.slice(1)}
        value={this.props.state[name]}
        onChange={this.props.handleChange}
      />
    );
    return (
      <>
        <h1 className="edit-header">Create New Note:</h1>
        <form
          className="form"
          onSubmit={this.submitHandler}
          autoComplete="nope"
        >
          {makeInput("title", "text", "title")}
          {makeInput("textBody", "text", "text")}
          <button>Save</button>
        </form>
      </>
    );
  }
}

export default AddNote;
