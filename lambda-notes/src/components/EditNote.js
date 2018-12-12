import React from "react";
import { connect } from 'react-redux';
import { editNote } from '../actions';

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    }
  }
  submitHandler = event => {
    event.preventDefault();
    this.props.editNote(this.props.singleNote._id, this.state);
    this.props.history.push("/");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const makeInput = (name, type = "text", className = "input-section") => (
      <textarea
        autoComplete="off"
        className={className}
        type={type}
        name={name}
        placeholder={this.props.singleNote[name]}
        value={this.state[name]}
        onChange={this.handleChange}
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

export default connect(null, { editNote })(EditNote);
