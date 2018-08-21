import React, { Component } from 'react';
import NewForm from './new-form.js';
import styled from 'styled-components';

const NewNoteDiv = styled.div`
  ${'' /* border: 1px solid green; */}
  display: flex;
  flex-direction: column;
  background-color: #F3F3F3;
  padding: 25px;
  height: 100vh;
  h4 {
    font-weight: bold;
    margin: 0 0 10px 10px;
  }
`;

export default class NewNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: props.notes,
      count: props.count
    }
  }

  render() {
    console.log(this.props.count)
    return (
      <NewNoteDiv>
        <h4>Create New Note:</h4>
        <NewForm button="Create" count={this.props.count} newNote={this.props.newNote}></NewForm>
      </NewNoteDiv>
    );
  }
}
