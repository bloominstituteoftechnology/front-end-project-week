import React, { Component } from 'react';
import { createNote } from '../actions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class CreateNote extends Component {
  state = {
    title: '',
    text: '',
    users: this.props.users,
    fireRedirect: false
  };

  handleOnChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createNote(this.state);
    this.setState({ title: '', text: '', fireRedirect: true });
  }

  render() {
    return (
      <div className="CreateNote">
        <h4 className="title">Create New Note:</h4>
        <form
          onSubmit={this.handleOnSubmit.bind(this)}
          onChange={this.handleOnChange.bind(this)}
        >
          <input
            className="newTitle"
            type="text"
            name="title"
            placeholder="New Title"
            value={this.state.title}
          />
          <input
            className="newContent"
            type="text"
            name="text"
            placeholder="New Content"
            value={this.state.text}
          />
          <button className="save" type="submit">
            Save
          </button>
        </form>
        {this.state.fireRedirect && (
          <Redirect to="https://lambdanotes-frontend.herokuapp.com/home" />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
    users: state.auth.users
  };
};

export default withRouter(connect(mapStateToProps, { createNote })(CreateNote));
