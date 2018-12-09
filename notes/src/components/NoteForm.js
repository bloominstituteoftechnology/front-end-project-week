import React from 'react';

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

export default NoteForm;
