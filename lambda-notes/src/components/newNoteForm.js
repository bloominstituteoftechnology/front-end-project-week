import React from 'react';
import { createNote } from '../actions';
import { connect } from 'react-redux';
import '../CSS/newNoteForm.css';

class NewNoteForm extends React.Component {
  state = {
    title: '',
    textBody: '',
  }

  handleSubmit = () => {
    this.props.createNote(this.state);
    this.props.history.push("/");
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className="form-group" style={{height: '100vh'}}>
        <h2>Create New Note:</h2>
        <input onChange={this.onChangeHandler} name="title" type="text" placeholder="Title" className="form-control my-3"/>
        <textarea onChange={this.onChangeHandler} name="textBody" type="text" placeholder="Text Body" className="form-control my-3" rows="10" cols="30"/>
        <button onClick={this.handleSubmit} type="submit" className="save-btn btn px-5">Save</button>
      </form>
    )
  }
}

export default connect(null, { createNote })(NewNoteForm);