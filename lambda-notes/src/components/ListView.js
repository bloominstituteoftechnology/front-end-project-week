import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteCardContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  border: 1px solid lightblue;
`

const NoteCard = styled.div`
  background-color: white;
  border: 1px solid #979797;
  margin-right: 10px;
  margin-top: 20px;
  width: 190px;
  height: 200px;
  overflow: hidden;
`

class ListView extends Component {
  render() {
    return (
      <NoteCardContainer>
        {this.props.notes.map ( note => <Link to={`view-note/${note.id}`} key={Math.random()}><NoteCard><h2>{note.title}</h2><p>{note.textBody}</p></NoteCard></Link>) }
      </NoteCardContainer>
    );
  }
}

export default ListView;