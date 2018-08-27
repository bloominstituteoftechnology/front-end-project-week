import React, { Component } from 'react';

import styled from 'styled-components'

const Card = styled.div`
    background: white;
    height: 220px;
    border: 1px solid #ccc;
`
const NoteTitle = styled.h3`
    padding: 16px;
    margin: 2px 4px;
    border-bottom: 1px solid #eee;
`

const NoteBody = styled.p`
    padding: 20px;
    line-height: 1.6;
`

class NoteCard extends Component {
  render() {
    return (
      <Card>
       <NoteTitle>{this.props.note.title}</NoteTitle>
       <NoteBody>{this.props.note.body}</NoteBody>
      </Card>
    );
  }
}

export default NoteCard;


