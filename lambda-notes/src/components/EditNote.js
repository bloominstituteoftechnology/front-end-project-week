import React from "react";

class EditNote extends React.Component {
  submitHandler = event => {
    event.preventDefault();
    this.props.editNote(this.props.singleNote._id, this.props.state);
    this.props.history.push("/");
  };

  render() {
    const makeInput = (name, type = "text", className = "input-section") => (
      <textarea
        autoComplete="off"
        className={className}
        type={type}
        name={name}
        placeholder={this.props.singleNote[name]}
        value={this.props.state[name]}
        onChange={this.props.handleChange}
      />
    );
    return (
      <>
        <h1 className="edit-header">Edit Note:</h1>
        <form
          className="form"
          onSubmit={this.submitHandler}
          autoComplete="nope"
        >
          {makeInput("title", "text", "title")}
          {makeInput("textBody", "text", "text")}
          <button>Update</button>
        </form>
      </>
    );
  }
}

export default EditNote;
