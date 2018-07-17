import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';

const Container = styled.div`
  height: ${window.innerHeight}px;
  padding: 60px 40px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 600px;
  height: 40px;
  font-size: 16px;
  border: 2px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;
`;

const TextArea = styled.textarea`
  width: 1000px;
  height: 500px;
  font-size: 16px;
  border: 2px solid #aaa;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 15px 0;
  color: white;
  border-radius: 3px;
  border: 1px solid #aaa;
  font-size: 20px;
  font-weight: bold;
  background: #009999;
  &:hover {
    color: #009999;
    background: white;
  }
`;

class NoteNew extends Component {
  state = {
    title: '',
    body: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddNote = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      textBody: this.state.body,
      tags: []
    };
    this.props.addNote(note);
    this.props.history.push('/');
  };
  render() {
    return (
      <Container>
        <Heading>Create a New Note</Heading>
        <Form onSubmit={this.handleAddNote}>
          <Input
            placeholder="Note Title"
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleInput}
          />
          <TextArea
            placeholder="Note Content"
            type="text"
            value={this.state.body}
            name="body"
            onChange={this.handleInput}
          />
          <Button>Save</Button>
        </Form>
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(NoteNew);
