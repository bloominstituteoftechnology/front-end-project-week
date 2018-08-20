import React, { Component } from 'react';
import styled from 'styled-components';

const NoteFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      id: '',
    }
  }

  sendToApp = (e) => {
    e.preventDefault();
    if (this.props.button === "Create") {
      this.props.newNote(this.state);
    } else {
      this.props.editNote(this.state);
    }
    this.setState({
      title: '',
      body: '',
      id: ','
    })
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      id: Date(),
    })
  }

  render() {
    return (
        <NoteFormDiv>
          <form onSubmit={this.sendToApp}>
            <input
              onChange={this.inputHandler}
              name='title' value={this.state.title} placeholder="Note Title">{this.value}</input>
            <input
              name='body'
              onChange={this.inputHandler} value={this.state.body} placeholder="Note Content">{this.value}</input>
            <button>{this.props.button}</button>
          </form>
        </NoteFormDiv>
    );
  }
}
