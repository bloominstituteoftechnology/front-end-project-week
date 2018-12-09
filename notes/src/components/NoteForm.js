import React from 'react';
import {addNote} from '../store/actions';
import {connect} from 'react-redux';

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      textBody: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    this.props.addNote(this.state);
  };

  makeInput = (name, type) => {
    return (
      <input
        type={type}
        name={name}
        value={this.state[name]}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.makeInput('title', 'text')}
        <textarea
          name="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default connect(
  null,
  {addNote},
)(NoteForm);
