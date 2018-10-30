import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions';

class NewNote extends Component {
  state = {
    title: '',
    textBody: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNote = e => {
    e.preventDefault();
    const { title, textBody } = this.state;
    this.props.addNote({ title, textBody });
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2>Create New Note</h2>

        <form onSubmit={this.addNote}>
          <input
            type="text"
            placeholder="Note Title"
            onChange={this.handleInput}
            name="title"
            value={this.state.title}
          />

          <textarea
            type="text"
            placeholder="Note Content"
            onChange={this.handleInput}
            name="textBody"
            value={this.state.textBody}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { addNote })(NewNote);
