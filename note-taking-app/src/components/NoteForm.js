import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveNote } from '../actions';

class NoteForm extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }
  render() {
    const { title, content } = this.state
    const { saveNote } = this.props
    return (
      <div>
        <input name='title' value={title} onChange={this.handleChange}/>
        <input name='content' value={content} onChange={this.handleChange}/>
        <button onClick={() => saveNote({title, content})}>Save</button>
      </div>
    );
  }
}

export default connect(null, { saveNote })(NoteForm);