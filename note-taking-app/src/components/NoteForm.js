import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveNote } from '../actions';

class NoteForm extends Component {
  state = {
    id: '',
    title: '',
    content: ''
  }
  componentDidMount = () => {
    const { id, title, content } = this.props
    if (id && title && content) {
      this.setState({
        id, title, content
      })
    }
    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {    
    const { saveNote } = this.props
    const { id, title, content } = this.state
    return (
      <div>
        <input name='title' value={title} onChange={e => this.handleChange(e)}/>
        <input name='content' value={content} onChange={e => this.handleChange(e)}/>
        <button onClick={() => saveNote({id, title, content})}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { note } = state.toolbarReducer
  return note
}

export default connect(mapStateToProps, { saveNote })(NoteForm);