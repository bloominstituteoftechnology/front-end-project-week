import React, { Component } from 'react';
import styled from 'styled-components';

class NoteDetails extends Component {
  state = {
    title: '',
    content: '',
    id: '',
  }

  componentDidMount() {
    this.setState({
      title: this.props.noteDetails.title,
      content: this.props.noteDetails.content,
      id: this.props.noteDetails.id,
    })
  }
  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
      </div>
    )
  }
}

export default NoteDetails;