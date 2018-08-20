import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

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
    }
  }
  render() {
    return (
      <NewNoteDiv>
        <h4>New Note</h4>

      </NewNoteDiv>
    );
  }
}
