import React, { Component } from 'react';
import NewForm from './new-form.js';
import styled from 'styled-components';

const NewNoteDiv = styled.div`
  display: flex;
  flex-direction: column;

`;

export default class NewNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: props.notes,
      count: props.count
    }
  }

  sendToApp = () => {

  }

  render() {
    console.log(this.props.count)
    return (
      <NewNoteDiv>
        <h4>New Note</h4>
        <NewForm button="Create" count={this.props.count} newNote={this.props.newNote}></NewForm>
      </NewNoteDiv>
    );
  }
}
