import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NoteFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      id: this.props.note.id,
      count:  props.count,
    }
  }

  sendToApp = (e) => {
    console.log(this.props)
    if (this.props.button === "Create") {
      this.props.newNote(this.state);
    } else {
      this.props.editNote(this.state);
    }
    this.setState({
      title: '',
      body: '',

    })
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    console.log(this)
    return (
        <NoteFormDiv>
          <form onSubmit={this.sendToApp}>
            <input
              onChange={this.inputHandler}
              name='title' value={this.state.title} placeholder="Note Title">{this.value}</input>
            <input
              name='body'
              onChange={this.inputHandler} value={this.state.body} placeholder="Note Content">{this.value}</input>
            <Link onClick={this.sendToApp} to="/all-notes">{this.props.button}</Link>
          </form>
        </NoteFormDiv>
    );
  }
}
