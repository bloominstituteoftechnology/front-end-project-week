import React from "react";
import { connect } from 'react-redux';
import { addNote } from '../actions';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    }
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      textBody: ''
    })
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
        placeholder={name[0].toUpperCase() + name.slice(1)}
        value={this.state[name]}
        onChange={this.handleChange}
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

export default connect(null, { addNote })(AddNote);
